import types from './types';

const INITIAL_STATE = {
  addUserState: '',
  errorMessage: ''
};
const addUserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_ADD_USER_STATE: {
      const { addUserState } = action;
      return {
        ...state,
        addUserState,
      };
    }
    case types.SET_ADD_USER_ERROR: {
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

export default addUserReducer;
