import axios from 'axios';
import {notify} from 'react-notify-toast';
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
      const color = { background: '#d62e85', text: "#FFFFFF" };
      notify.show('User Added Successfully!', 'custom', 2000, color);
    })
    .catch(({ response }) => {
      dispatch(setAddUserState(constants.ADD_USER_ERROR));
      dispatch(setAddUserError(response.data.error));
      const color = { background: '#da2424', text: "#FFFFFF" };
      notify.show(response.data.message, 'custom', 2000, color);
    });
};

export default doAddUser;
