import {
  REQUEST_GET_PRODUCTS_IN_CART,
  REQUEST_EDIT_PRODUCT_IN_CART,
  REQUEST_DELETE_PRODUCT_IN_CART,
  REQUEST_ADD_PRODUCT_TO_CART
} from '../redux/actions/actionTypes';
import {put, takeEvery, takeLatest, call} from 'redux-saga/effects';
import * as actions from '../redux/actions/index';
import { getProductsInCart, updateProductInCart, deleteProductInCart, addProductToCartService } from '../services/cart'
import WrappedAlert from '../components/Alert/index';
import * as Navigation from '../navigation/RootNavigation'

function* getProductsInCartAct(action) {
  try {
    console.log('getProductsInCartAct - action:', action);
    const res = yield call(getProductsInCart, action.payload);
    console.log('GET SUCCESS: ', res);
    yield put(actions.get_products_in_cart_success(res));
  } catch (error) {
    console.log('GET FAILED: ', error);
    yield put(actions.get_products_in_cart_fail(error));
    yield call(WrappedAlert, 'Error', error);
  }
}

function* editProductInCartAct(action) {
  try {
    console.log('editProductInCartAct - action:', action);
    const res = yield call(updateProductInCart, action.payload);
    console.log('EDIT SUCCESS: ', res);
    yield put(actions.edit_product_in_cart_success(res));
  } catch (error) {
    console.log('EDIT FAILED: ', error);
    yield put(actions.edit_product_in_cart_fail(error));
    yield call(WrappedAlert, 'Error', error);
  }
}

function* addProductInCartAct(action) {
  try {
    console.log('addProductInCartAct - action:', action);
    const res = yield call(addProductToCartService, action.payload);
    console.log('ADD SUCCESS: ', res);
    yield put(actions.add_product_to_cart_success(res));
    yield Navigation.goBack()
    yield call(WrappedAlert, 'Info', "Add product to cart successfully");
  } catch (error) {
    console.log('ADD FAILED: ', error);
    yield put(actions.add_product_to_cart_fail(error));
    yield call(WrappedAlert, 'Error', error);
  }
}

function* deleteProductInCartAct(action) {
  try {
    console.log('deleteProductInCartAct - action:', action);
    const res = yield call(deleteProductInCart, action.payload);
    console.log('GET SUCCESS: ', res);
    yield put(actions.delete_product_in_cart_success(res));
  } catch (error) {
    console.log('GET FAILED: ', error);
    yield put(actions.delete_product_in_cart_fail(error));
    if (error == 403) {
      // let check = yield call(AlertExpiredToken);
      // if (check == 'OK') yield put(authActions.logout());
    } else {
      // yield call(wrappedAlert, 'Error', error);
    }
  }
}

export function* cartSagas() {
  yield takeEvery(REQUEST_GET_PRODUCTS_IN_CART, getProductsInCartAct);
  yield takeEvery(REQUEST_EDIT_PRODUCT_IN_CART, editProductInCartAct);
  yield takeEvery(REQUEST_DELETE_PRODUCT_IN_CART, deleteProductInCartAct);
  yield takeLatest(REQUEST_ADD_PRODUCT_TO_CART, addProductInCartAct);
}
