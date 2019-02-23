import axios from 'axios';
import { toast } from 'react-toastify';
import actions from './actions';
import constants from './constants';

const { setLoginState, setLoginError } = actions;
const url = 'https://newstoremanager.herokuapp.com/api/v1/auth/login';

const doLogin = (emailaddress, password) => dispatch => {
  dispatch(setLoginState(constants.LOGGING_IN));
  dispatch(setLoginError(''));
  return axios
    .post(url, { emailaddress, password })
    .then(({ data }) => {
      localStorage.setItem('accesstoken', data.token);
      localStorage.setItem('role', data.role);
      localStorage.setItem('id', data.id);
      dispatch(setLoginState(constants.LOGIN_SUCCESS));
      console.log(data);
    })
    .catch(({ response }) => {
      dispatch(setLoginState(constants.LOGIN_ERROR));
      dispatch(setLoginError(response.data.error));
      console.log(response.data);
      toast.error(response.data.error, {
        hideProgressBar: true,
      });
    });
};

export default doLogin;
