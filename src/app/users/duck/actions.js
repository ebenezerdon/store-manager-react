import types from './types';

const setAddUserState = addUserState => ({
  type: types.SET_ADD_USER_STATE,
  addUserState,
});

const setAddUserError = errorMessage => ({
  type: types.SET_ADD_USER_ERROR,
  errorMessage,
});

export default { setAddUserState, setAddUserError };
