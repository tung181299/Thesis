import {
  mainAxios,
  API_ADD_ORDER,
  API_GET_ORDERS
} from '../api/api';
import {responseSuccess, responseFailed} from '../utils/dataResponseUtils';

export const getOrderByUserId = userId => {
  return new Promise((resolve, reject) => {
    mainAxios
      .get(API_GET_ORDERS, {
        params: {
          userId: userId
        }
      })
      .then(res => {
        let data = responseSuccess(res.data.orders);
        resolve(data);
      })
      .catch(err => {
        let error = responseFailed(err);
        reject(error);
      });
  });
};

export const addOrderService = req => {
  return new Promise((resolve, reject) => {
    mainAxios
      .post(API_ADD_ORDER, req)
      .then(res => {
        resolve("OK")
      })
      .catch(err => {
        let error = responseFailed(err);
        reject(error);
      });
  });
};
