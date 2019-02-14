import types from './types';

const INITIAL_STATE = {
  loginState: '',
  errorMessage: '',
};
const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_LOGIN_STATE: {
      const { loginState } = action;
      return {
        ...state,
        loginState,
      };
    }
    case types.SET_LOGIN_ERROR: {
      const { errorMessage } = action;
      return {
        ...state,
        errorMessage,
      };
    }
    default:
      return state;
  }
};

export default loginReducer;
