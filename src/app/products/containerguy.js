import { connect } from 'react-redux';
import { doAddProduct } from './duck';
import addProductComponent from './stuff';
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
  },
  addProduct: {
    addProductState,
    errorMessage
  }
}) => {
  return {
    addProductState,
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
    },
    addProduct: productDetails =>
      dispatch(doAddProduct(productDetails)),
  };
};
const addProductContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(addProductComponent);

export { addProductContainer, mapDispatchToProps, mapStateToProps };
