import types from './types';

const INITIAL_STATE = {
  addProductState: '',
  errorMessage: ''
};
const addProductReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_ADD_PRODUCT_STATE: {
      const { addProductState } = action;
      return {
        ...state,
        addProductState,
      };
    }
    case types.SET_ADD_PRODUCT_ERROR: {
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

export default addProductReducer;
