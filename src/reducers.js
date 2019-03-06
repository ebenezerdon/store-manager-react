import { combineReducers } from 'redux';
import { loginReducer } from './app/login';
import { addProductReducer } from './app/products';
import { addUserReducer } from './app/users';
import { fetchAllDataReducer } from './app/common';

const rootReducer = combineReducers({
  login: loginReducer,
  fetchAllData: fetchAllDataReducer,
  addProduct: addProductReducer,
  addUser: addUserReducer
});

export default rootReducer;
