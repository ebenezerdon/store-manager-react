import { connect } from 'react-redux';
import CartComponent from './CartComponent';

const mapStateToProps = ({
  fetchAllData: { cart }
}) => { return { cart }; };

const CartContainer = connect(mapStateToProps)(CartComponent);

export { CartContainer, mapStateToProps };
