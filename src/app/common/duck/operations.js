import axios from 'axios';
import actions from './actions';
import constants from './constants';

const apiUrl = process.env.API_URL;
const {
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
} = actions;

const doFetchCurrentUser = () => dispatch => {
  dispatch(setFetchCurrentUserState(constants.FETCHING_CURRENT_USER));
  const headers = {
    headers: { accesstoken: localStorage.getItem('accesstoken') },
  };
  return axios
    .get(`${apiUrl}/users/me`, headers)
    .then(({ data }) => {
      dispatch(addUserData({ currentUser: data }));
      dispatch(setFetchCurrentUserState(constants.FETCH_CURRENT_USER_SUCCESS));
    })
    .catch(({ response }) => {
      dispatch(setFetchCurrentUserState(constants.FETCH_CURRENT_USER_ERROR));
      dispatch(setFetchCurrentUserError(response.data.error));
    });
};

const doFetchAllUsers = () => dispatch => {
  dispatch(setFetchAllUserState(constants.FETCHING_ALL_USERS));
  const headers = {
    headers: { accesstoken: localStorage.getItem('accesstoken') },
  };
  return axios
    .get(`${apiUrl}/users`, headers)
    .then(({ data }) => {
      dispatch(addUserData({ allUsers: data }));
      dispatch(setFetchAllUserState(constants.FETCH_ALL_USER_SUCCESS));
    })
    .catch(({ response }) => {
      dispatch(setFetchAllUserState(constants.FETCH_ALL_USER_ERROR  ));
      dispatch(setFetchAllUserError(response.data.error));
    });
};

const doFetchSaleRecord = () => dispatch => {
  dispatch(setFetchSaleRecordState(constants.FETCHING_SALE_RECORD));
  const headers = {
    headers: { accesstoken: localStorage.getItem('accesstoken') },
  };
  return axios
    .get(`${apiUrl}/sales`, headers)
    .then(({ data }) => {
      dispatch(addSaleRecord({ data }));
      dispatch(setFetchSaleRecordState(constants.FETCH_SALE_RECORD_SUCCESS));
    })
    .catch(({ response }) => {
      dispatch(setFetchSaleRecordState(constants.FETCH_SALE_RECORD_ERROR  ));
      dispatch(setFetchSaleRecordError(response.data.error));
    });
};

const doFetchProducts = () => dispatch => {
  dispatch(setFetchProductsState(constants.FETCHING_PRODUCTS));
  const headers = {
    headers: { accesstoken: localStorage.getItem('accesstoken') },
  };
  return axios
    .get(`${apiUrl}/products`, headers)
    .then(({ data }) => {
      dispatch(addProducts({ data }));
      dispatch(setFetchProductsState(constants.FETCH_PRODUCTS_SUCCESS));
    })
    .catch(({ response }) => {
      dispatch(setFetchProductsState(constants.FETCH_PRODUCTS_ERROR));
      dispatch(setFetchProductsError(response.data.error));
    });
};

export {
  doFetchCurrentUser,
  doFetchSaleRecord,
  doFetchProducts,
  doFetchAllUsers
};
