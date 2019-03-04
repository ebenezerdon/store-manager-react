import { combineReducers } from 'redux';
import { loginReducer } from './app/login';
import { fetchAllDataReducer } from './app/common';

const rootReducer = combineReducers({
  login: loginReducer,
  fetchAllData: fetchAllDataReducer
});

export default rootReducer;
