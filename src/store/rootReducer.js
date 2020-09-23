import {persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage'
import {combineReducers} from "redux";
import {reducer as ItemsReducer} from './reducer'

const persistConfig = {
    key:'root',
    storage,
    whitelist:['items']
}

const rootReducer = combineReducers({
    'items' : ItemsReducer
})

export default persistReducer(persistConfig,rootReducer)