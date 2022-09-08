import { call, put, takeLatest } from 'redux-saga/effects';
import WrappedAlert from '../components/Alert/index';
import * as Navigation from '../navigation/RootNavigation';
import {
  REQUEST_ADD_ORDER,
  REQUEST_GET_ORDERS
} from '../redux/actions/actionTypes';
import * as actions from '../redux/actions/index';
import { addOrderService, getOrderByUserId } from '../services/order';

function* getOrderOfUserAct(action) {
  try {
    console.log('getOrderOfUserAct - action:', action);
    const res = yield call(getOrderByUserId, action.payload);
    console.log('GET ORDER SUCCESS: ', res);
    yield put(actions.get_orders_success(res));
  } catch (error) {
    console.log('GET ORDER FAILED: ', error);
    yield put(actions.get_orders_fail(error));
    yield call(WrappedAlert, 'Error', error);
  }
}

function* addOrderAct(action) {
  try {
    console.log('addProductInCartAct - action:', action);
    const res = yield call(addOrderService, action.payload);
    console.log('ADD ORDER SUCCESS: ', res);
    yield put(actions.add_order_success(res));
    yield Navigation.goBack()
    yield call(WrappedAlert, 'Info', "Order successfully");
  } catch (error) {
    console.log('ADD ORDER FAILED: ', error);
    yield put(actions.add_order_fail(error));
    yield call(WrappedAlert, 'Error', error);
  }
}

export function* orderSagas() {
  yield takeLatest(REQUEST_ADD_ORDER, addOrderAct);
  yield takeLatest(REQUEST_GET_ORDERS, getOrderOfUserAct);
}
