import {
  REQUEST_GET_PRODUCT,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
} from '../actions/actionTypes';

var initialState = {
  loading: false,
  data: [],
  error: null
};

const productReducers = (state = initialState, {type, payload}) => {
  switch (type) {
    case REQUEST_GET_PRODUCT: 
      return {
        ...state,
        loading: true,
        error: null
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        loading: false,
        data: payload,
        error: null
      }
    case GET_PRODUCTS_FAIL:
      return {
        loading: false,
        error: payload
      }
    default:
      return state;
  }
};

export default productReducers;
