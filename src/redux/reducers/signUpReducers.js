import * as actions from '../actions/actionTypes';

const initialState = {
  name: null,
  email: null,
  password: null,
  error: null,
  loading: false,
  phone: null
};

const signUpReducers = (state = initialState, {type, payload}) => {
  switch (type) {
    case actions.SIGNUP_REQUEST:
      return {
        loading: true,
        name: payload.name,
        email: payload.email,
        password: payload.password,
        phone: payload.phone
      };
    case actions.SIGNUP_SUCCESS:
      return {
        loading: false,
      };
    case actions.SIGNUP_FAILED:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default signUpReducers;
