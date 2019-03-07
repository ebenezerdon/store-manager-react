import { connect } from 'react-redux';
import SingleProductComponent from './SingleProductComponent';
import { doAddToCart } from './duck';
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
    cart,
    errorMessage
  }
}) => {
  return {
    fetchProductsState,
    products,
    cart,
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
    addToCart: (cart, product) => {
      dispatch(doAddToCart(cart, product))
    }
  };
};

const SingleProductContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SingleProductComponent);

export { SingleProductContainer, mapDispatchToProps, mapStateToProps };
