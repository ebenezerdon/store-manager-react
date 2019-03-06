import { connect } from 'react-redux';
import ListProductComponent from './ListProductsComponent';
import {
  doFetchCurrentUser,
  doFetchAllUsers,
  doFetchSaleRecord,
  doFetchProducts
} from '../common';

const mapStateToProps = ({
  fetchAllData: {
    fetchProductsState,
    products,
    errorMessage
  },
}) => {
  return {
    fetchProductsState,
    products,
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

const ListProductContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListProductComponent);

export { ListProductContainer, mapDispatchToProps, mapStateToProps };
