import * as actions from '../actions/actionTypes';

const initialState = {
  username: null,
  password: null,
  user: null,
  error: null,
  loading: false,
  form: null,
  data: null,
};

const authReducers = (state = initialState, {type, payload}) => {
  switch (type) {
    case actions.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        username: payload.username,
        password: payload.password,
      };
    case actions.LOGIN_SUCCESS:
      return {
        username: null,
        password: null,
        user: payload,
        loading: false,
        error: null,
      };
    case actions.LOGIN_FAILED:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case actions.SET_USER_DATA:
      return {
        ...state,
        user: payload,
      };
    case actions.LOGOUT:
      return {
        username: null,
        password: null,
        user: null,
        loading: false,
        error: null,
      };
    case actions.REQUEST_GET_INFO:
      return {
        ...state,
        loading: true,
        error: null
      };
    case actions.GET_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        error: null
      };
    case actions.GET_INFO_FAIL:
      return {
        ...state,
        loading: false,
        data: null,
        error: true
      };
    case actions.REQUEST_EDIT_INFO:
      return {
        ...state,
        loading: true,
        error: null
      };
    case actions.EDIT_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        error: null
      };
    case actions.EDIT_INFO_FAIL:
      return {
        ...state,
        loading: false,
        data: null,
        error: true
      };
    default:
      return state;
  }
};

export default authReducers;
