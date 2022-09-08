import {all} from 'redux-saga/effects';
import {cartSagas} from './cartSagas';
import {productSagas} from './productSagas';
import {authSagas} from './authSagas';
import {signUpSagas} from './signUpSagas';
import {orderSagas} from './orderSagas';

export default function* rootSaga() {
  yield all([
    cartSagas(),
    productSagas(),
    authSagas(),
    signUpSagas(),
    orderSagas(),
  ]);
}
