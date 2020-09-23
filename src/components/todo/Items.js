import React from 'react'
import {connect} from 'react-redux'
import {removeItem} from "../../store/actions";
import NewItem from "./NewItem";

const Items = (props) => {
    console.log(props)
    const items = props.items ? props.items.map((item, index) => {
        return (
            <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                {item}
                <span onClick={() => props.deleteItem(item)} className="badge badge-danger badge-pill" style={styles}>Remove</span>
            </li>
        )
        }
    ) : null
    return (
        <div className={'row justify-content-center align-items-center'} style={{height:'100vh'}}>
            <div className="col-md-7">
                <h6 className="text-center">Todo Items</h6>
                {props.items.length !== 0 ? (
                    <ul className="list-group">
                        {items}
                    </ul>
                ) : (
                    <p>You have not added any todo</p>
                )}

            </div>
            <div className="col-md-4">
                <NewItem/>
            </div>
        </div>
    )
}


const styles = {
    cursor : 'pointer'
}

const mapStateToProps = state => {
    return {
        items : state.items.items
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteItem : (id) => dispatch(removeItem(id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Items)