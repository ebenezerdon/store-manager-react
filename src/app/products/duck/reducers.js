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
    case types.ADD_TO_CART: {
      const { newCartProduct } = action;
      const oldCartProducts = state.cart;
      return {
        ...state,
        cart: { ...oldCartProducts, ...newCartProduct },
      };
    }
    default:
      return state;
  }
};

export default addProductReducer;
