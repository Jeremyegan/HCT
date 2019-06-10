import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import dataReducer from './redux/dataReducer';
import userReducer from './redux/userReducer';

const rootReducer = combineReducers({
    user: userReducer,
    data: dataReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))