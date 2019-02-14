import axios from 'axios';
import { toast } from 'react-toastify';
import actions from './actions';
import constants from './constants';

const { setLoginState, setLoginError } = actions;
const url = 'https://learnground-api-staging.herokuapp.com/api/v1/users/login';

const doLogin = (emailaddress, password) => dispatch => {
  dispatch(setLoginState(constants.LOGGING_IN));
  dispatch(setLoginError(''));
  return axios
    .post(url, { emailaddress, password })
    .then(({ data }) => {
      localStorage.setItem('accesstoken', data.token);
      dispatch(setLoginState(constants.LOGIN_SUCCESS));
    })
    .catch(({ response }) => {
      dispatch(setLoginState(constants.LOGIN_ERROR));
      dispatch(setLoginError(response.data.error));
      toast.error(response.data.error, {
        hideProgressBar: true,
      });
    });
};

export default doLogin;
