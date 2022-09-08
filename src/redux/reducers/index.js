import { combineReducers } from "redux";
import cartReducers from "./cartReducers";
import productReducers from './productReducers';
import authReducers from './authReducers';
import signUpReducers from "./signUpReducers";
import orderReducers from "./orderReducers";
import {persistReducer} from 'redux-persist';
import Storage from '@react-native-async-storage/async-storage';

const allReducers = combineReducers({
  cartReducers,
  productReducer: productReducers,
  authReducers,
  signUpReducers,
  orderReducers
})

const rootPersistConfig = {
  key: 'root',
  storage: Storage,
  whitelist: ['authReducers'],
};

export default persistReducer(rootPersistConfig, allReducers);