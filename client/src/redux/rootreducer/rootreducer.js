import {combineReducers} from "redux";
import errorReducer from '../reducers/errorReducer';
import productReducer from '../reducers/productReducer';
import searchReducer from '../reducers/searchReducer';

export default combineReducers({
    error: errorReducer,
    product: productReducer,
    search: searchReducer
});