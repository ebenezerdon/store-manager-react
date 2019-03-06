import axios from 'axios';
import { toast } from 'react-toastify';
import actions from './actions';
import constants from './constants';

const { setAddUserState, setAddUserError } = actions;
const apiUrl = process.env.API_URL;

const doAddUser = userDetails => dispatch => {
  dispatch(setAddUserState(constants.ADDING_USER));
  const headers = {
    headers: { accesstoken: localStorage.getItem('accesstoken') },
  };
  return axios
    .post(`${apiUrl}/auth/signup`, userDetails, headers)
    .then(({ data }) => {
      dispatch(setAddUserState(constants.ADD_USER_SUCCESS));
      console.log(data);
    })
    .catch(({ response }) => {
      dispatch(setAddUserState(constants.ADD_USER_ERROR));
      dispatch(setAddUserError(response.data.error));
      console.log(response.data);
      toast.error(response.data.error, {
        hideProgressBar: true,
      });
    });
};

export default doAddUser;
