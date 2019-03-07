import React from 'react';
import { shallow, mount } from 'enzyme';
import CartComponent from './CartComponent';
import { actions, constants, checkoutReducer, types } from './duck';
import { EllipsisLoaderComponent } from '../common/loaders'
import {
  CartContainer,
  mapDispatchToProps,
  mapStateToProps,
} from './CartContainer';

const {
  setCheckoutState,
  setCheckoutError,
} = actions;

describe('CartComponent Action', () => {
  it('it should setCheckoutState', () => {
    const action = setCheckoutState(constants.CHECKING_OUT);
    expect(action).toEqual({
      type: types.SET_CHECKOUT_STATE,
      checkoutState: constants.CHECKING_OUT,
    });
  });

  it('it should setCheckoutError message', () => {
    const action = setCheckoutError(constants.CHECKOUT_ERROR);
    expect(action).toEqual({
      type: types.SET_CHECKOUT_ERROR,
      errorMessage: constants.CHECKOUT_ERROR,
    });
  });

  it('should setup default state values', () => {
    const state = checkoutReducer(undefined, {
      type: '@@INIT',
    });
    expect(state.checkoutState).toEqual('');
  });
});

describe('CartComponent Container', () => {
  it('should show initial state', () => {
    const initialState = {
      fetchAllData: { cart: { Data: ['Data'] } },
      checkout: {
        checkoutState: '',
        errorMessage: '',
      },
    };
    expect(mapStateToProps(initialState).checkoutState).toEqual('');
    expect(mapStateToProps(initialState).errorMessage).toEqual('');
  });

  it('should dispatch action', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).checkout();
    expect(typeof dispatch.mock.calls[0][0]).toEqual('function');
  });
});

describe('CartComponent Reducers', () => {
  it('should setup default state values', () => {
    const state = checkoutReducer(undefined, {
      type: '@@INIT',
    });
    expect(state).toEqual({
      addProductState: '',
      checkoutState: '',
      errorMessage: ''
    });
  });

  it('it should change the checkout state', () => {
    const action = {
      type: types.SET_CHECKOUT_STATE,
      checkoutState: constants.CHECKING_OUT,
    };
    const state = checkoutReducer(undefined, action);
    expect(state.checkoutState).toEqual(constants.CHECKING_OUT);
  });

  it('it should change the checkout error message', () => {
    const action = {
      type: types.SET_CHECKOUT_ERROR,
      errorMessage: 'request failed',
    };
    const state = checkoutReducer(undefined, action);
    expect(state.errorMessage).toEqual(action.errorMessage);
  });
});
