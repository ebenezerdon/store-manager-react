import { connect } from 'react-redux';
import { doCheckout } from './duck';
import CartComponent from './CartComponent';

const mapStateToProps = ({
  fetchAllData: { cart },
  checkout: { checkoutState, errorMessage }
}) => { return { cart, checkoutState, errorMessage }; };

const mapDispatchToProps = dispatch => {
  return {
    checkout: productDetails =>
      dispatch(doCheckout(productDetails)),
    addProduct: productDetails =>
      dispatch(doAddProduct(productDetails)),
  };
};

const CartContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartComponent);

export { CartContainer, mapStateToProps };
