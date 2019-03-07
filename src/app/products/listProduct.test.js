import React from 'react';
import { shallow, mount } from 'enzyme';
import { EllipsisLoaderComponent } from '../common/loaders'
import ListProductComponent from './ListProductsComponent';
import {
  mapDispatchToProps,
  mapStateToProps,
} from './ListProductsContainer';

describe('ListProduct Container', () => {
  it('should show initial state', () => {
    const initialState = {
      fetchAllData: { cart: { Data: ['Data'] } },
      errorMessage: '',
      checkout: {
        checkoutState: '',
      },
    };
    expect(mapStateToProps(initialState).cart).toEqual({ Data: [ 'Data' ] });
  });

  it('should dispatch action', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).fetchStoreData();
    mapDispatchToProps(dispatch).addToCart();
    expect(typeof dispatch.mock.calls[0][0]).toEqual('function');
  });
});

describe('List products component', () => {
  it('should render the component', () => {
    const fetchStoreData = jest.fn();
    const products = {};
    const component = shallow(
      <ListProductComponent
        {...{ fetchStoreData, products }}
      />,
    );
    expect(component.exists()).toBe(true);
    expect(component).toMatchSnapshot();
    expect(fetchStoreData).toHaveBeenCalled();
  });
});
