import types from './types';

const setFetchCurrentUserState = fetchCurrentUserState => ({
  type: types.SET_FETCH_CURRENT_USER_STATE,
  fetchCurrentUserState,
});

const setFetchCurrentUserError = errorMessage => ({
  type: types.SET_FETCH_CURRENT_USER_ERROR,
  errorMessage,
});

const setFetchAllUserState = fetchAllUserState => ({
  type: types.SET_FETCH_ALL_USER_STATE,
  fetchAllUserState,
});

const setFetchAllUserError = errorMessage => ({
  type: types.SET_FETCH_ALL_USER_ERROR,
  errorMessage,
});

const setFetchSaleRecordState = fetchSaleRecordState => ({
  type: types.SET_FETCH_SALE_RECORD_STATE,
  fetchSaleRecordState,
});

const setFetchSaleRecordError = errorMessage => ({
  type: types.SET_FETCH_SALE_RECORD_ERROR,
  errorMessage,
});

const setFetchProductsState = fetchProductsState => ({
  type: types.SET_FETCH_PRODUCTS_STATE,
  fetchProductsState,
});

const setFetchProductsError = errorMessage => ({
  type: types.SET_FETCH_PRODUCTS_ERROR,
  errorMessage,
});

const addUserData = userData => ({
  type: types.ADD_USER_DATA,
  userData,
});

const addSaleRecord = saleRecord => ({
  type: types.ADD_SALE_RECORD,
  saleRecord,
});

const addProducts = products => ({
  type: types.ADD_PRODUCTS,
  products,
});

export default {
  setFetchCurrentUserState,
  setFetchCurrentUserError,
  setFetchAllUserState,
  setFetchAllUserError,
  setFetchSaleRecordState,
  setFetchSaleRecordError,
  setFetchProductsState,
  setFetchProductsError,
  addUserData,
  addSaleRecord,
  addProducts
};
