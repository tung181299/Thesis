import {
  mainAxios,
  API_GET_PRODUCTS_IN_CART,
  API_EDIT_PRODUCT_IN_CART,
  DELETE_PRODUCT_IN_CART,
  API_ADD_PRODUCT_TO_CART
} from '../api/api';
import {responseSuccess, responseFailed} from '../utils/dataResponseUtils';

export const getProductsInCart = userId => {
  return new Promise((resolve, reject) => {
    mainAxios
      .get(API_GET_PRODUCTS_IN_CART + `/${userId}`)
      .then(res => {
        let data = responseSuccess(res.data.products);
        resolve(data);
      })
      .catch(err => {
        console.log('getProductsInCart error: ', err);
        let error = responseFailed(err);
        reject(error);
      });
  });
};

export const updateProductInCart = dataReq => {
  return new Promise((resolve, reject) => {
    mainAxios
    .patch(API_EDIT_PRODUCT_IN_CART + `/${dataReq.userId}/${dataReq.productId}`,{ 
      quantity: dataReq.quantity 
    })
    .then(res => {
        // getProductsInCart();
        let data = responseSuccess(res.data.products);
        resolve(data);
      })
      .catch(err => {
        let error = responseFailed(err);
        if (err.response.status == 403) {
          reject(403);
        } else {
          reject(error);
        }
      });
  });
};

export const deleteProductInCart = dataReq => {
  return new Promise((resolve, reject) => {
    mainAxios
      .delete(DELETE_PRODUCT_IN_CART + `/${dataReq.userId}/${dataReq.cartId}`)
      .then(res => {
        let data = responseSuccess(res.data.products);
        resolve(data);
      })
      .catch(err => {
        let error = responseFailed(err);
        if (err.response.status == 403) {
          reject(403);
        } else {
          reject(error);
        }
      });
  });
};

export const addProductToCartService = req => {
  return new Promise((resolve, reject) => {
    mainAxios
      .post(API_ADD_PRODUCT_TO_CART, req)
      .then(res => {
        let data = getProductsInCart(req.userId)
        resolve(data)
      })
      .catch(err => {
        let error = responseFailed(err);
        reject(error);
      });
  });
};
