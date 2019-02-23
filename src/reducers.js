import { combineReducers } from 'redux';
import { loginReducer } from './app/login';

const rootReducer = combineReducers({
  login: loginReducer
});

export default rootReducer;
