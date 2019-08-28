import { createStore, applyMiddleware } from 'redux';
import rootReducer from './root-reducer';
import thunk from 'redux-thunk';

const middlewares = [thunk]

export const store = createStore(rootReducer, applyMiddleware(...middlewares));


