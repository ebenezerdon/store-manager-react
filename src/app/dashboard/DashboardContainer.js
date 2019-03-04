import { connect } from 'react-redux';
import DashboardComponent from './DashboardComponent';
import {
  doFetchCurrentUser,
  doFetchAllUsers,
  doFetchSaleRecord,
  doFetchProducts
} from '../common';

const mapStateToProps = ({
  fetchAllData: {
    fetchCurrentUserState,
    fetchAllUserState,
    fetchSaleRecordState,
    fetchProductsState,
    userData,
    saleRecord,
    products,
    errorMessage
  },
}) => {
  return {
    fetchCurrentUserState,
    fetchAllUserState,
    fetchSaleRecordState,
    fetchProductsState,
    userData,
    saleRecord,
    products,
    errorMessage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCurrentUser: () => dispatch(doFetchCurrentUser()),
    fetchallUsers: () => dispatch(doFetchAllUsers()),
    fetchSaleRecord: () => dispatch(doFetchSaleRecord()),
    fetchProducts: () => dispatch(doFetchProducts())
  };
};

const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashboardComponent);

export { DashboardContainer, mapDispatchToProps, mapStateToProps };
