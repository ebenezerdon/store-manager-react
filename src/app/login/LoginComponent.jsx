import React from 'react';
import { Redirect } from 'react-router-dom';
import { EllipsisLoaderComponent } from '../common/loaders'
import { constants } from './duck';
import '../style/main.css';

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
    <main id="login-tag">
      <div className="container">
        <div className="login-form" id="login">
          <form action="" autoComplete="on">
            <h1>Login Here</h1>
            <div>
              <input type="email" placeholder="Email Address" required="" id="emailaddress" autoFocus />
            </div>
            <div>
              <input type="password" placeholder="Password" required="" id="password" />
            </div>
            <button type="submit" className="button">Login</button>
          </form>
          <div className="ring-loader">
            {loginState === constants.LOGGING_IN && <EllipsisLoaderComponent />}
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginComponent;
