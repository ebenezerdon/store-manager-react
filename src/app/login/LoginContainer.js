import { connect } from 'react-redux';
import { doLogin } from './duck';
import { LoginComponent as component } from './LoginComponent';

const mapStateToProps = ({ login: { loginState, errorMessage } }) => {
  return { loginState, errorMessage };
};

const mapDispatchToProps = dispatch => {
  return {
    loginUser: (usernameOrEmail, password) =>
      dispatch(doLogin(usernameOrEmail, password)),
  };
};
const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(component);

export { LoginContainer, mapDispatchToProps, mapStateToProps };
