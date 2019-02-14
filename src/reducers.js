import { combineReducers } from 'redux';
import { signupReducer } from './app/signup';
import { loginReducer } from './app/login';
import { resetPasswordReducer } from './app/resetPassword';

const rootReducer = combineReducers({
  signup: signupReducer,
  login: loginReducer,
  resetPassword: resetPasswordReducer,
});

export default rootReducer;
