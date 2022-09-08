import * as actions from '../actions/actionTypes';

const initialState = {
  form: null,
  data: [],
  loading: false,
  error: null,
};

const orderReducers = (state = initialState, {type, payload}) => {
  switch (type) {
    case actions.REQUEST_ADD_ORDER:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actions.ADD_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case actions.ADD_ORDER_FAILED:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    // GET ORDERS
    case actions.REQUEST_GET_ORDERS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actions.GET_ORDER_SUCCESS:
      return {
        ...state,
        data: payload,
        error: null,
        loading: false,
      };
    case actions.GET_ORDER_FAILED:
      return {
        ...state,
        loading: false,
        data: [],
        error: true,
      };
    default:
      return state;
  }
};

export default orderReducers;
