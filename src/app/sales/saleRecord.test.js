import React from 'react';
import { shallow, mount } from 'enzyme';
import { EllipsisLoaderComponent } from '../common/loaders'
import SaleRecordComponent from './SaleRecordComponent';
import {
  mapDispatchToProps,
  mapStateToProps,
} from './SaleRecordContainer';

describe('SaleRecord Container', () => {
  it('should show initial state', () => {
    const initialState = {
      fetchAllData: { cart: { Data: ['Data'] } },
      errorMessage: '',
      checkout: {
        checkoutState: '',
      },
    };
    expect(mapStateToProps(initialState).fetchAllUserState).not.toBe(false);
  });

  it('should dispatch action', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).fetchStoreData();
    expect(typeof dispatch.mock.calls[0][0]).toEqual('function');
  });
});

describe('Sale record component', () => {
  it('should render the component', () => {
    const fetchStoreData = jest.fn();
    const saleRecord = {data: []};
    const data = [{
      created_at: 'created_at',
      productname: 'productname',
      quantity: 'quantity',
      price: 'price'
    }];
    const component = shallow(
      <SaleRecordComponent
        {...{ fetchStoreData, saleRecord, data }}
      />,
    );
    expect(component.exists()).toBe(true);
    expect(component).toMatchSnapshot();
  });
});
