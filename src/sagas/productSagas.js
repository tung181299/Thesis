import {REQUEST_GET_PRODUCT, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAIL} from '../redux/actions/actionTypes';
import {put, takeEvery, takeLatest, call} from 'redux-saga/effects';
import * as actions from "../redux/actions/index";
import { getProducts } from '../services/product';

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* getProductsAct(action) {
  try {
    console.log('getProductsAct - action:', action);
    const res = yield call(getProducts, action.payload);
    console.log('GET SUCCESS: ');
    yield put(actions.get_products_success(res.products));
  } catch (error) {
    console.log('GET FAILED: ', error);
    yield put(actions.get_products_fail(error));
    if (error == 403) {
      // let check = yield call(AlertExpiredToken);
      // if (check == 'OK') yield put(authActions.logout());
    } else {
      // yield call(wrappedAlert, 'Error', error);
    }
  }
}

export function* productSagas() {
  yield takeEvery(REQUEST_GET_PRODUCT, getProductsAct);
}
