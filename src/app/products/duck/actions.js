import types from './types';

const setAddProductState = addProductState => ({
  type: types.SET_ADD_PRODUCT_STATE,
  addProductState,
});

const setAddProductError = errorMessage => ({
  type: types.SET_ADD_PRODUCT_ERROR,
  errorMessage,
});

export default { setAddProductState, setAddProductError };
