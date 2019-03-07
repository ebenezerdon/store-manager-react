import React from 'react';
import { shallow, mount } from 'enzyme';
import { EllipsisLoaderComponent } from '../common/loaders'
import ListUserComponent from './ListUserComponent';
import {
  mapDispatchToProps,
  mapStateToProps,
} from './ListUserContainer';

describe('ListUser Container', () => {
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

describe('List user component', () => {
  it('should render the component', () => {
    const fetchStoreData = jest.fn();
    const userData = {allUsers: []};
    const allUsers = {};
    const component = shallow(
      <ListUserComponent
        {...{ fetchStoreData, userData, allUsers }}
      />,
    );
    expect(component.exists()).toBe(true);
    expect(component).toMatchSnapshot();
  });
});
