import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import dataReducer from './dataReducer';

export default createStore(dataReducer, applyMiddleware(promiseMiddleware))