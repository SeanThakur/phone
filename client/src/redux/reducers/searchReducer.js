import {SEARCH_PRODUCT} from '../actions/types';

const initialState = {
    product: null
}

export default function(state = initialState, action) 
{
    switch(action.type)
    {
        case SEARCH_PRODUCT:
            return {
                ...state,
                product: action.payload
            }
        default:
            return state
    }
}