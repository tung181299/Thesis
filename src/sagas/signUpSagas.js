import {call, takeLatest, put} from 'redux-saga/effects';
import {signUpService} from '../../src/services/auth';
import {
  SIGNUP_REQUEST
} from '../redux/actions/actionTypes';
import * as actions from '../redux/actions/index'
import WrappedAlert from '../components/Alert';
import * as Navigation from '../navigation/RootNavigation'

export function* signUp(action) {
  try {
    const res = yield call(signUpService, action.payload);
    // console.log('SIGN UP RESPONSE: ', res);
    yield put(actions.signUpSuccess());
    yield call(WrappedAlert, 'Information', 'You have signed up successfully!');
    yield Navigation.navigate('Login');
  } catch (error) {
    console.log('SIGNUP ERROR: ', error);
    yield put(actions.signUpFailed(error));
    yield call(wrappedAlert, 'Error', error);
  }
}

export function* signUpSagas() {
  yield takeLatest(SIGNUP_REQUEST, signUp);
}
