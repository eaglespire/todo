import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {addItem} from "../../store/actions";


const NewItem = (props) => {
    const [item , setItem] = useState('')

    useEffect(() => {
        //props.sendItem()
    })
    const submitHandler = (e) => {
        e.preventDefault()
        //get an item from  the local state and dispatch an actionn to the reducer
        console.log(item)
        props.sendItem(item)
        setItem('')
    }
    return (
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">New Item</label>
                    <input value={item} type="text" className="form-control" onChange={(e) => setItem(e.target.value)} />
                </div>
                <button onClick={submitHandler} type="submit" className="btn btn-primary">Add</button>
            </form>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        sendItem: (item) => dispatch(addItem(item))
    }
}

const mapStateToProps = state => {
    return {
        items: state.items
    }
}

export  default connect(mapStateToProps, mapDispatchToProps) (NewItem)