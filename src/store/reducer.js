import {ADD_ITEM, REMOVE_ITEM} from "./actions";

const initState = {
    items: []
}

export const reducer = (state = initState, action) => {
    switch(action.type){
        case ADD_ITEM :
            return {
                ...state,
                items: state.items.concat(action.payload)
            }
        case REMOVE_ITEM:
            let id = action.payload
            return {
                items : state.items.filter((item,index) => item !== id)
            }
        default :
            return state
    }

}
