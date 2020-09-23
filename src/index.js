import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import {createStore, compose, applyMiddleware} from "redux";
import {persistStore} from "redux-persist";
import {PersistGate} from 'redux-persist/integration/react'
import thunk from "redux-thunk";
import rootReducer from "./store/rootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));
const persistor = persistStore(store)


ReactDOM.render(
    <Provider store={store}>
            <PersistGate persistor={persistor} loading={true}>
                <App />
            </PersistGate>
    </Provider>,
    document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
