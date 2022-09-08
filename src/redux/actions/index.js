import {
  REQUEST_GET_PRODUCTS_IN_CART,
  GET_PRODUCTS_IN_CART_SUCCESS,
  GET_PRODUCTS_IN_CART_FAIL,
  REQUEST_GET_PRODUCT,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  SET_USER_DATA,
  LOGOUT,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
  REQUEST_EDIT_PRODUCT_IN_CART,
  EDIT_PRODUCT_IN_CART_SUCCESS,
  EDIT_PRODUCT_IN_CART_FAIL,
  REQUEST_DELETE_PRODUCT_IN_CART,
  DELETE_PRODUCT_IN_CART_SUCCESS,
  DELETE_PRODUCT_IN_CART_FAIL,
  REQUEST_EDIT_INFO,
  EDIT_INFO_SUCCESS,
  EDIT_INFO_FAIL,
  REQUEST_GET_INFO,
  GET_INFO_SUCCESS,
  GET_INFO_FAIL,
  ADD_PRODUCT_TO_CART_SUCCESS,
  REQUEST_ADD_PRODUCT_TO_CART,
  ADD_PRODUCT_TO_CART_FAILED,
  REQUEST_ADD_ORDER,
  ADD_ORDER_FAILED,
  ADD_ORDER_SUCCESS,
  REQUEST_GET_ORDERS,
  GET_ORDER_SUCCESS,
} from './actionTypes';

//CART
export const request_get_products_in_cart = value => {
  return {
    type: REQUEST_GET_PRODUCTS_IN_CART,
    payload: value,
  };
};

export const get_products_in_cart_success = value => {
  return {
    type: GET_PRODUCTS_IN_CART_SUCCESS,
    payload: value,
  };
};

export const get_products_in_cart_fail = value => {
  return {
    type: GET_PRODUCTS_IN_CART_FAIL,
    payload: value,
  };
};

export const request_edit_product_in_cart = value => {
  return {
    type: REQUEST_EDIT_PRODUCT_IN_CART,
    payload: value,
  };
};

export const edit_product_in_cart_success = value => {
  return {
    type: EDIT_PRODUCT_IN_CART_SUCCESS,
    payload: value,
  };
};

export const edit_product_in_cart_fail = value => {
  return {
    type: EDIT_PRODUCT_IN_CART_FAIL,
    payload: value,
  };
};

export const request_delete_product_in_cart = value => {
  return {
    type: REQUEST_DELETE_PRODUCT_IN_CART,
    payload: value,
  };
};

export const delete_product_in_cart_success = value => {
  return {
    type: DELETE_PRODUCT_IN_CART_SUCCESS,
    payload: value,
  };
};

export const delete_product_in_cart_fail = value => {
  return {
    type: DELETE_PRODUCT_IN_CART_FAIL,
    payload: value,
  };
};


//PRODUCT
export const request_get_products = value => {
  return {
    type: REQUEST_GET_PRODUCT,
    payload: value,
  };
};

export const get_products_fail = value => {
  return {
    type: GET_PRODUCTS_FAIL,
    payload: value,
  };
};

export const get_products_success = value => {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload: value,
  };
};

export const loginRequest = (username, password) => {
  return {
    type: LOGIN_REQUEST,
    payload: {
      username: username,
      password: password,
      loading: true,
    },
  };
};

export const loginSuccess = data => {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
};

export const loginFailed = error => {
  return {
    type: LOGIN_FAILED,
    payload: error,
  };
};

export const set_user_data = data => {
  return {
    type: SET_USER_DATA,
    payload: data,
  };
};

export const logout = data => {
  return {
    type: LOGOUT,
  };
};

export const signUpRequest = (name, phone, email, password) => {
  return {
    type: SIGNUP_REQUEST,
    payload: {
      name: name,
      phone: phone,
      email: email,
      password: password,
    },
  };
};

export const signUpSuccess = data => {
  return {
    type: SIGNUP_SUCCESS,
    payload: data,
  };
};

export const signUpFailed = error => {
  return {
    type: SIGNUP_FAILED,
    payload: error,
  };
};

//get & edit user info
export const request_edit_info = value => {
  return {
    type: REQUEST_EDIT_INFO,
    payload: value,
  };
};

export const edit_info_success = value => {
  return {
    type: EDIT_INFO_SUCCESS,
    payload: value,
  };
};

export const edit_info_fail = value => {
  return {
    type: EDIT_INFO_FAIL,
    payload: value,
  };
};

export const request_get_info = value => {
  return {
    type: REQUEST_GET_INFO,
    payload: value,
  };
};

export const get_info_success = value => {
  return {
    type: GET_INFO_SUCCESS,
    payload: value,
  };
};

export const get_info_fail = value => {
  return {
    type: GET_INFO_FAIL,
    payload: value,
  };
};
// add to cart
export const request_add_product_to_cart = value => {
  return {
    type: REQUEST_ADD_PRODUCT_TO_CART,
    payload: value,
  };
};

export const add_product_to_cart_success = value => {
  return {
    type: ADD_PRODUCT_TO_CART_SUCCESS,
    payload: value,
  };
};

export const add_product_to_cart_fail = value => {
  return {
    type: ADD_PRODUCT_TO_CART_FAILED,
    payload: value,
  };
};

// add order
export const request_add_order = value => {
  return {
    type: REQUEST_ADD_ORDER,
    payload: value,
  };
};

export const add_order_success = value => {
  return {
    type: ADD_ORDER_SUCCESS,
    payload: value,
  };
};

export const add_order_fail = value => {
  return {
    type: ADD_ORDER_FAILED,
    payload: value,
  };
};

// get order
export const request_get_orders = value => {
  return {
    type: REQUEST_GET_ORDERS,
    payload: value,
  };
};

export const get_orders_fail = value => {
  return {
    type: GET_ORDER_FAILED,
    payload: value,
  };
};

export const get_orders_success = value => {
  return {
    type: GET_ORDER_SUCCESS,
    payload: value,
  };
};
