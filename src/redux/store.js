import {cartReducer} from './reducers/cartReducer';
import {authReducer} from './reducers/authReducer';
import {promiseReducer} from './reducers/promiseReducer'
import { actionRootCats } from './actions/actionsCats';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { actionCatSale } from './actions/actionCatSale';


const store = createStore(combineReducers({
    promise: promiseReducer,
    auth: authReducer,
    cart: cartReducer,
  }), applyMiddleware(thunk))

store.dispatch(actionRootCats())

store.dispatch(actionCatSale("62d40377b74e1f5f2ec1a129"))

export default store