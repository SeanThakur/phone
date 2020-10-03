import axios from 'axios';
import {GET_ERRORS,GET_PRODUCTS, CLEAR_PRODUCTS, LOADING, SEARCH_PRODUCT} from './types';

export const createProduct = (product, location) => dispatch => {
    axios.post('/', product)
        .then(() => {
            location.href = "/products"
        }).catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
}

export const getProducts = () => dispatch => {
    dispatch(productLoading);
    axios
      .get("/all")
      .then(res => dispatch({
          type: GET_PRODUCTS,
          payload: res.data
      }))
      .catch(err =>  dispatch({
        type: GET_ERRORS,
        payload: err.response.data
    }));
}

export const productSearch = (features) => dispatch => {
    axios.get(`/search/${features}`)
        .then((response) => dispatch({
            type: SEARCH_PRODUCT,
            payload: response.data
        })).catch((err) => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
}

export const productLoading = () => {
    return {
        type: LOADING
    }
}

export const cleatProducts = () => {
    return {
        type: CLEAR_PRODUCTS,
    }
}