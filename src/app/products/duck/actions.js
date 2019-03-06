import types from './types';

const setAddProductState = addProductState => ({
  type: types.SET_ADD_PRODUCT_STATE,
  addProductState
});

const setAddProductError = errorMessage => ({
  type: types.SET_ADD_PRODUCT_ERROR,
  errorMessage
});

const setCheckoutState = checkoutState => ({
  type: types.SET_CHECKOUT_STATE,
  checkoutState
});

const setCheckoutError = errorMessage => ({
  type: types.SET_CHECKOUT_ERROR,
  errorMessage
});

const addToCart = newCartProduct => ({
  type: types.ADD_TO_CART,
  newCartProduct
});

const clearCart = data => ({
  type: types.CLEAR_CART,
  data
})

export default {
  setAddProductState,
  setAddProductError,
  setCheckoutState,
  setCheckoutError,
  addToCart,
  clearCart
};
