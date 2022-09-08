import {call, takeLatest, put} from 'redux-saga/effects';
import {loginService, getInfo, updateInfo} from '../../src/services/auth';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT,
  REQUEST_GET_INFO,
  REQUEST_EDIT_INFO
} from '../redux/actions/actionTypes';
import * as actions from '../redux/actions/index'
import WrappedAlert from '../components/Alert';
import Storage from '@react-native-async-storage/async-storage'
import * as Navigation from '../navigation/RootNavigation'
import * as _ from 'lodash'

export const saveUser = req => {
  return new Promise((resolve, reject) => {
    Storage.clear()
    Storage.setItem('currentUser', JSON.stringify(req))
      .then(res => {
        resolve(req);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const clearStorage = () => {
  return new Promise((resolve, reject) => {
    Storage.clear()
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export function* login(action) {
  try {
    const res = yield call(loginService, action.payload);
    console.log('login response: ', res);
    const saveRes = yield call(saveUser, res);
    yield put(actions.loginSuccess(res));
    yield Navigation.replace('Main');
  } catch (error) {
    console.log('LOGIN ERROR: ', error);
    yield put(actions.loginFailed(error));
    yield call(WrappedAlert, 'Error', error);
  }
}

export function* logout() {
  try {
    yield call(clearStorage);
    yield put(actions.set_user_data(null));
    yield Navigation.replace('Auth');
  } catch (error) {
    console.log('LOGOUT ERROR: ', error);
    yield call(WrappedAlert, 'Error', error.message);
  }
}

function* getInfoAct(action) {
  try {
    console.log('getInfoAct - action:', action);
    const res = yield call(getInfo, action.payload);
    console.log('GET SUCCESS: ', res);
    yield put(actions.get_info_success(res));
  } catch (error) {
    console.log('GET FAILED: ', error);
    yield put(actions.get_info_fail(error));
    yield call(WrappedAlert, 'Error', error);
  }
}

function* editInfoAct(action) {
  try {
    console.log('editInfoAct - action:', action);
    const res = yield call(updateInfo, action.payload);
    console.log('GET SUCCESS: ', res);
    yield put(actions.edit_info_success(res));
    var user = res 
    user.userName = user.name
    yield call(saveUser, res);
  } catch (error) {
    console.log('GET FAILED: ', error);
    yield put(actions.edit_info_fail(error));
    yield call(WrappedAlert, 'Error', error);
  }
}

export function* authSagas() {
  yield takeLatest(LOGIN_REQUEST, login);
  yield takeLatest(LOGOUT, logout);
  yield takeLatest(REQUEST_GET_INFO, getInfoAct);
  yield takeLatest(REQUEST_EDIT_INFO, editInfoAct);
}
