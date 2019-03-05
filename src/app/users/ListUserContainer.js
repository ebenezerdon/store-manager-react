import { connect } from 'react-redux';
import ListUserComponent from './ListUserComponent';
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
    errorMessage
  },
}) => {
  return {
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
    }
  };
};

const ListUserContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListUserComponent);

export { ListUserContainer, mapDispatchToProps, mapStateToProps };
