import { connect } from 'react-redux';
import { doAddProduct } from './duck';
import AddProductComponent from './AddProductComponent';
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
const AddProductContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddProductComponent);

export { AddProductContainer, mapDispatchToProps, mapStateToProps };
