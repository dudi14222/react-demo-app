
import { combineReducers } from 'redux';
import cartReducer from './reducers/cartReducer';
import userReducer from './reducers/userReducer';
import productsReducer from './reducers/productsReducer';
import orderHistoryReducer from './reducers/orderHistoryReducer';

export default combineReducers({
    cartReducer,
    userReducer,
    productsReducer,
    orderHistoryReducer
})