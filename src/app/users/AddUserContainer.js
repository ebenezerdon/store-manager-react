import { connect } from 'react-redux';
import { doAddUser } from './duck';
import AddUserComponent from './AddUserComponent';
import {
  doFetchCurrentUser,
  doFetchAllUsers,
  doFetchSaleRecord,
  doFetchProducts
} from '../common';

const mapStateToProps = ({
  fetchAllData: {
    fetchAllUserState,
    userData,
  },
  addUser: {
    addUserState,
    errorMessage
  }
}) => {
  return {
    addUserState,
    fetchAllUserState,
    userData,
    errorMessage
    };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchStoreData: () => {
      dispatch(doFetchCurrentUser());
      dispatch(doFetchAllUsers());
      dispatch(doFetchSaleRecord());
      dispatch(doFetchProducts());
    },
    addUser: userDetails =>
      dispatch(doAddUser(userDetails)),
  };
};
const AddUserContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddUserComponent);

export { AddUserContainer, mapDispatchToProps, mapStateToProps };
