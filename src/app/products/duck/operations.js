import axios from 'axios';
import { toast } from 'react-toastify';
import actions from './actions';
import constants from './constants';

const { setAddProductState, setAddProductError, addToCart } = actions;
const apiUrl = process.env.API_URL;

const doAddProduct = productDetails => dispatch => {
  dispatch(setAddProductState(constants.ADDING_PRODUCT));
  const headers = {
    headers: { accesstoken: localStorage.getItem('accesstoken') },
  };
  return axios
    .post(`${apiUrl}/products`, productDetails, headers)
    .then(({ data }) => {
      dispatch(setAddProductState(constants.ADD_PRODUCT_SUCCESS));
      console.log(data);
    })
    .catch(({ response }) => {
      dispatch(setAddProductState(constants.ADD_PRODUCT_ERROR));
      dispatch(setAddProductError(response.data.error));
      console.log(response.data);
      toast.error(response.data.error, {
        hideProgressBar: true,
      });
    });
};

const doAddToCart = (cart, product) => dispatch => {
  cart.unshift(product);
  dispatch(addToCart(({ cart })));
}

export { doAddProduct, doAddToCart };
