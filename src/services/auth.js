import {mainAxios, API_LOGIN, API_SIGN_UP, GET_INFO, EDIT_INFO} from '../api/api';
import {responseSuccess, responseFailed} from '../utils/dataResponseUtils';

export const loginService = req => {
  return new Promise((resolve, reject) => {
    mainAxios
      .post(
        API_LOGIN,
        {
          username: req.username,
          password: req.password,
        },
        {
          headers: {
            'Content-type': 'Application/json',
            Accept: 'application/json',
          },
        },
      )
      .then(res => {
        let obj = responseSuccess(res.data);
        var user = {
          token: obj.token,
          userName: obj.userName,
          userId: obj.userId,
          isAdmin: obj.isAdmin,
          email: obj.email,
          phone: obj.phone
        };
        resolve(user);
      })
      .catch(err => {
        console.log('error: ', err);
        if (err.response && err.response.status && err.response.status == 400) {
          reject('Incorrect username or password!');
        } else {
          reject('Something went wrong');
        }
      });
  });
};

export const signUpService = req => {
  return new Promise((resolve, reject) => {
    mainAxios
      .post(API_SIGN_UP, {
        name: req.name,
        phone: req.phone,
        email: req.email,
        password: req.password,
      })
      .then(res => {
        resolve('ok');
      })
      .catch(err => {
        let error = responseFailed(err);
        reject(error);
      });
  });
};

export const getInfo = dataReq => {
  return new Promise((resolve, reject) => {
    mainAxios
      .get(GET_INFO + `/${dataReq.userId}`, {
        params: {
          // page: data.page,
          // order_by_us: 'desc',
        },
      })
      .then(res => {
        let data = responseSuccess(res.data.response);
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

export const updateInfo = dataReq => {
  return new Promise((resolve, reject) => {
    mainAxios
    .patch(EDIT_INFO + `/${dataReq.userId}`,{ 
      name: dataReq.name,
      phone: dataReq.phone,
      email: dataReq.email 
    })
    .then(res => {
        let data = responseSuccess(res.data.response);
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