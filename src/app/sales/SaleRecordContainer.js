import { connect } from 'react-redux';
import SaleRecordComponent from './SaleRecordComponent';
import {
  doFetchCurrentUser,
  doFetchAllUsers,
  doFetchSaleRecord,
  doFetchProducts
} from '../common';

const mapStateToProps = ({
  fetchAllData: {
    fetchSaleRecordState,
    saleRecord,
    errorMessage
  },
}) => {
  return {
    fetchSaleRecordState,
    saleRecord,
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

const SaleRecordContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SaleRecordComponent);

export { SaleRecordContainer, mapDispatchToProps, mapStateToProps };
