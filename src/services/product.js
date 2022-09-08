import {
  mainAxios,
  API_GET_PRODUCTS
} from '../api/api';
import {responseSuccess, responseFailed} from '../utils/dataResponseUtils';

export const getProducts = data => {
  return new Promise((resolve, reject) => {
    mainAxios
      .get(API_GET_PRODUCTS, {
        params: {
          brand: data.brand,
          type: data.type,
        },
      })
      .then(res => {
        let data = responseSuccess(res.data);
        resolve(data);
      })
      .catch(err => {
        let error = responseFailed(err);
        if (err.response.status == 400) {
          resolve([]);
        } else if (err.response.status == 403) {
          reject(403);
        } else {
          reject(error);
        }
      });
  });
};