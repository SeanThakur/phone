import {GET_PRODUCTS, CLEAR_PRODUCTS, LOADING} from '../actions/types';

const initialState = {
    isLoading: false,
    products: null
}

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                isLoading: false,
                products: action.payload
            }
        case CLEAR_PRODUCTS:
            return {
                ...state,
                products: null
            }
        case LOADING:
            return {
                ...state,
                isLoading: true
            }
        default: 
            return state;
    }
}