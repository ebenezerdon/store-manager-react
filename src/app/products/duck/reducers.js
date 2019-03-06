import types from './types';

const INITIAL_STATE = {
  addProductState: '',
  checkoutState: '',
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
    case types.CLEAR_CART: {
      const { data } = action;
      return {
        ...state,
        cart: data
      };
    }
    default:
      return state;
  }
};

const checkoutReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_CHECKOUT_STATE: {
      const { checkoutState } = action;
      return {
        ...state,
        checkoutState,
      };
    }
    case types.SET_CHECKOUT_ERROR: {
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

export { addProductReducer, checkoutReducer };
