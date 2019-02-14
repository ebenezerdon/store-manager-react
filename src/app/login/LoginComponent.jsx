import React from 'react';
import { Redirect } from 'react-router-dom';
import RingLoaderComponent from '../loaders';
import { constants } from './duck';
import '../../style/signup.scss';

export const LoginComponent = ({ loginUser, loginState }) => {
  const onFormSubmit = e => {
    e.preventDefault();
    const emailaddress = e.target.elements.emailaddress.value.trim();
    const password = e.target.elements.password.value.trim();
    loginUser(emailaddress, password);
  };
  if (loginState === constants.LOGIN_SUCCESS) {
    return <Redirect to="/" />;
  }
  return (
    <div className="login-form" id="login">
      <form action="" autocomplete="on">
          <h1>Login Here</h1>
          <div>
            <input type="email" placeholder="Email Address" required="" id="emailaddress" autofocus />
          </div>
          <div>
            <input type="password" placeholder="Password" required="" id="password" />
          </div>
          <button type="submit" class="button">Login</button>
        </form>
      <div className="ring-loader">
        {loginState === constants.LOGGING_IN && <RingLoaderComponent />}
      </div>
    </div>
  );
};

export default LoginComponent;
