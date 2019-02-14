import types from './types';

const setLoginState = loginState => ({
  type: types.SET_LOGIN_STATE,
  loginState,
});

const setLoginError = errorMessage => ({
  type: types.SET_LOGIN_ERROR,
  errorMessage,
});

export default { setLoginState, setLoginError };
