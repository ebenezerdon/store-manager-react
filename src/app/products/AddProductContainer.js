import { connect } from 'react-redux';
import { doAddProduct } from './duck';
import AddProductComponent from './AddProductComponent';

const mapStateToProps = ({
  addProduct: {
    addProductState,
    errorMessage
  }
}) => {
  return {
    addProductState,
    errorMessage
    };
};

const mapDispatchToProps = dispatch => {
  return {
    addProduct: productDetails =>
      dispatch(doAddProduct(productDetails)),
  };
};
const AddProductContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddProductComponent);

export { AddProductContainer, mapDispatchToProps, mapStateToProps };
