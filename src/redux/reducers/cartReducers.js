import {
  REQUEST_GET_PRODUCTS_IN_CART,
  GET_PRODUCTS_IN_CART_FAIL,
  GET_PRODUCTS_IN_CART_SUCCESS,
  REQUEST_EDIT_PRODUCT_IN_CART,
  EDIT_PRODUCT_IN_CART_SUCCESS,
  EDIT_PRODUCT_IN_CART_FAIL,
  REQUEST_DELETE_PRODUCT_IN_CART,
  DELETE_PRODUCT_IN_CART_SUCCESS,
  DELETE_PRODUCT_IN_CART_FAIL,
  REQUEST_ADD_PRODUCT_TO_CART,
  ADD_PRODUCT_TO_CART_SUCCESS,
  ADD_PRODUCT_TO_CART_FAILED
} from '../actions/actionTypes';

var initialState = {
  loading: false,
  data: [],
  error: null
};

const cartReducers = (state = initialState, {type, payload}) => {
  switch (type) {
    case REQUEST_GET_PRODUCTS_IN_CART:
      return {
        ...state,
        loading: true,
        error: null
      };
    case GET_PRODUCTS_IN_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        error: null
      };
    case GET_PRODUCTS_IN_CART_FAIL:
      return {
        ...state,
        loading: false,
        data: [],
        error: true
      };
    case REQUEST_EDIT_PRODUCT_IN_CART:
      return {
        ...state,
        loading: true,
        error: null
      };
    case EDIT_PRODUCT_IN_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        error: null
      };
    case EDIT_PRODUCT_IN_CART_FAIL:
      return {
        ...state,
        loading: false,
        error: true
      };
    //delete product in cart
    case REQUEST_DELETE_PRODUCT_IN_CART:
      return {
        ...state,
        loading: true,
        error: null
      };
    case DELETE_PRODUCT_IN_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        error: null
      };
    case DELETE_PRODUCT_IN_CART_FAIL:
      return {
        ...state,
        loading: false,
        error: true
      };
      // Add to cart
    case REQUEST_ADD_PRODUCT_TO_CART:
      return {
        ...state,
        loading: true,
        error: null
      };
    case ADD_PRODUCT_TO_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        error: null
      };
    case ADD_PRODUCT_TO_CART_FAILED:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
};

export default cartReducers;
