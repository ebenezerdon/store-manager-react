import { connect } from 'react-redux';
import { doAddUser } from './duck';
import AddUserComponent from './AddUserComponent';

const mapStateToProps = ({
  addUser: {
    addUserState,
    errorMessage
  }
}) => {
  return {
    addUserState,
    errorMessage
    };
};

const mapDispatchToProps = dispatch => {
  return {
    addUser: userDetails =>
      dispatch(doAddUser(userDetails)),
  };
};
const AddUserContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddUserComponent);

export { AddUserContainer, mapDispatchToProps, mapStateToProps };
