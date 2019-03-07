import React from 'react';
import thunk from 'redux-thunk';
import axios from 'axios';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import DashboardComponent from './DashboardComponent';
import { actions, constants, fetchAllDataReducer, types } from '../common/duck';
import { EllipsisLoaderComponent } from '../common/loaders';
import {
  DashboardContainer,
  mapDispatchToProps,
  mapStateToProps,
} from './DashboardContainer';

jest.mock('axios');

const {
  setFetchCurrentUserState,
  setFetchCurrentUserError,
  setFetchAllUserState,
  setFetchAllUserError,
  setFetchSaleRecordState,
  setFetchSaleRecordError,
  setFetchProductsState,
  setFetchProductsError,
  addUserData,
  addSaleRecord,
  addProducts
} = actions;

describe('ListArticle Component Action', () => {
  it('it should setFetchCurrentUserState', () => {
    const action = setFetchCurrentUserState(constants.FETCHING_CURRENT_USER);
    expect(action).toEqual({
      type: types.SET_FETCH_CURRENT_USER_STATE,
      fetchCurrentUserState: constants.FETCHING_CURRENT_USER,
    });
  });

  it('it should setFetchCurrentUserError', () => {
    const action = setFetchCurrentUserError(constants.FETCH_CURRENT_USER_ERROR);
    expect(action).toEqual({
      type: types.SET_FETCH_CURRENT_USER_ERROR,
      errorMessage: constants.FETCH_CURRENT_USER_ERROR,
    });
  });
  it('it should setFetchAllUserState', () => {
    const action = setFetchAllUserState(constants.FETCHING_ALL_USERS);
    expect(action).toEqual({
      type: types.SET_FETCH_ALL_USER_STATE,
      fetchAllUserState: constants.FETCHING_ALL_USERS,
    });
  });

  it('it should setFetchAllUserError', () => {
    const action = setFetchAllUserError(constants.FETCH_ALL_USER_ERROR);
    expect(action).toEqual({
      type: types.SET_FETCH_ALL_USER_ERROR,
      errorMessage: constants.FETCH_ALL_USER_ERROR,
    });
  });
  it('it should setFetchSaleRecordState', () => {
    const action = setFetchSaleRecordState(constants.FETCHING_SALE_RECORD);
    expect(action).toEqual({
      type: types.SET_FETCH_SALE_RECORD_STATE,
      fetchSaleRecordState: constants.FETCHING_SALE_RECORD,
    });
  });

  it('it should setFetchSaleRecordError', () => {
    const action = setFetchSaleRecordError(constants.FETCH_SALE_RECORD_ERROR);
    expect(action).toEqual({
      type: types.SET_FETCH_SALE_RECORD_ERROR,
      errorMessage: constants.FETCH_SALE_RECORD_ERROR,
    });
  });
  it('it should setFetchProductsState', () => {
    const action = setFetchProductsState(constants.FETCH_PRODUCTS_SUCCESS);
    expect(action).toEqual({
      type: types.SET_FETCH_PRODUCTS_STATE,
      fetchProductsState: constants.FETCH_PRODUCTS_SUCCESS,
    });
  });

  it('it should setFetchProductsError', () => {
    const action = setFetchProductsError(constants.FETCH_PRODUCTS_ERROR);
    expect(action).toEqual({
      type: types.SET_FETCH_PRODUCTS_ERROR,
      errorMessage: constants.FETCH_PRODUCTS_ERROR,
    });
  });

  it('it should addUserData', () => {
    const action = addUserData('Data');
    expect(action).toEqual({
      type: types.ADD_USER_DATA,
      userData: 'Data',
    });
  });

  it('it should addSaleRecord', () => {
    const action = addSaleRecord('Data');
    expect(action).toEqual({
      type: types.ADD_SALE_RECORD,
      saleRecord: 'Data',
    });
  });

  it('it should addProducts', () => {
    const action = addProducts('Data');
    expect(action).toEqual({
      type: types.ADD_PRODUCTS,
      products: 'Data',
    });
  });
});

describe('DashboardContainer', () => {
  it('should show initial state', () => {
    const initialState = {
      fetchAllData: {
        fetchCurrentUserState: '',
        fetchAllUserState: '',
        fetchSaleRecordState: '',
        fetchProductsState: '',
        userData: '',
        saleRecord: '',
        products: '',
        errorMessage: ''
      },
      location: { pathname: '' },
    };
    expect(mapStateToProps(initialState).fetchAllUserState).toEqual('');
    expect(mapStateToProps(initialState).errorMessage).toEqual('');
  });

  it('should dispatch action', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).fetchCurrentUser();
    mapDispatchToProps(dispatch).fetchallUsers();
    mapDispatchToProps(dispatch).fetchSaleRecord();
    mapDispatchToProps(dispatch).fetchProducts();
    expect(typeof dispatch.mock.calls[0][0]).toEqual('function');
  });
});

describe('fetchAllDataReducer', () => {
  it('should setup default state values', () => {
    const state = fetchAllDataReducer(undefined, {
      type: '@@INIT',
    });
    expect(state.fetchCurrentUserState).toEqual('');
  });

  it('it should SET_FETCH_CURRENT_USER_STATE', () => {
    const action = {
      type: types.SET_FETCH_CURRENT_USER_STATE,
      fetchCurrentUserState: constants.FETCHING_CURRENT_USER,
    };
    const state = fetchAllDataReducer(undefined, action);
    expect(state.fetchCurrentUserState).toEqual(constants.FETCHING_CURRENT_USER);
  });

  it('it should change the fetch CURRENT_USER error message', () => {
    const action = {
      type: types.SET_FETCH_CURRENT_USER_ERROR,
      errorMessage: 'failed to fetch',
    };
    const state = fetchAllDataReducer(undefined, action);
    expect(state.errorMessage).toEqual(action.errorMessage);
  });
  it('it should change the FETCH_ALL_USER_STATE', () => {
    const action = {
      type: types.SET_FETCH_ALL_USER_STATE,
      fetchAllUserState: constants.FETCHING_ALL_USERS,
    };
    const state = fetchAllDataReducer(undefined, action);
    expect(state.fetchAllUserState).toEqual(constants.FETCHING_ALL_USERS);
  });

  it('it should change the fetch ALL_USERS error message', () => {
    const action = {
      type: types.SET_FETCH_ALL_USER_ERROR,
      errorMessage: 'failed to fetch',
    };
    const state = fetchAllDataReducer(undefined, action);
    expect(state.errorMessage).toEqual(action.errorMessage);
  });
  it('it should SET_FETCH_SALE_RECORD_STATE', () => {
    const action = {
      type: types.SET_FETCH_SALE_RECORD_STATE,
      fetchSaleRecordState: constants.FETCHING_SALE_RECORD,
    };
    const state = fetchAllDataReducer(undefined, action);
    expect(state.fetchSaleRecordState).toEqual(constants.FETCHING_SALE_RECORD);
  });

  it('it should change the FETCH_SALE_RECORD error message', () => {
    const action = {
      type: types.SET_FETCH_SALE_RECORD_ERROR,
      errorMessage: 'failed to fetch',
    };
    const state = fetchAllDataReducer(undefined, action);
    expect(state.errorMessage).toEqual(action.errorMessage);
  });
  it('it should SET_FETCH_PRODUCTS_STATE', () => {
    const action = {
      type: types.SET_FETCH_PRODUCTS_STATE,
      fetchProductsState: constants.FETCHING_PRODUCTS,
    };
    const state = fetchAllDataReducer(undefined, action);
    expect(state.fetchProductsState).toEqual(constants.FETCHING_PRODUCTS);
  });

  it('it should change the fetch PRODUCTS error message', () => {
    const action = {
      type: types.SET_FETCH_PRODUCTS_ERROR,
      errorMessage: 'failed to fetch',
    };
    const state = fetchAllDataReducer(undefined, action);
    expect(state.errorMessage).toEqual(action.errorMessage);
  });

  it('it should ADD_USER_DATA', () => {
    const action = {
      type: types.ADD_USER_DATA,
      userData: {Data: ['Data']},
    };
    const state = fetchAllDataReducer(undefined, action);
    expect(state.userData).toEqual(action.userData);
  });

  it('it should ADD_SALE_RECORD', () => {
    const action = {
      type: types.ADD_SALE_RECORD,
      saleRecord: {Data: ['Data']},
    };
    const state = fetchAllDataReducer(undefined, action);
    expect(state.saleRecord).toEqual(action.saleRecord);
  });

  it('it should ADD_PRODUCTS', () => {
    const action = {
      type: types.ADD_PRODUCTS,
      products: {Data: ['Data']},
    };
    const state = fetchAllDataReducer(undefined, action);
    expect(state.products).toEqual(action.products);
  });

  it('should render the component', () => {
    const fetchCurrentUser = jest.fn();
    const fetchallUsers = jest.fn();
    const fetchSaleRecord = jest.fn();
    const fetchProducts = jest.fn();
    const userData = {
      currentUser: [{
        userimage: 'userimage',
        fullname: 'fullname',
        role: 'role'
      }],
    };
    const saleRecord = {
      data: [{sale: 'sale'}],
    };
    const products = {
      data: [{product: 'product'}],
    };
    const component = shallow(
      <DashboardComponent
        {...{
          fetchCurrentUser,
          fetchallUsers,
          fetchSaleRecord,
          fetchProducts,
          userData,
          saleRecord,
          products
        }}
      />,
    );
    expect(component.exists()).toBe(true);
    expect(component).toMatchSnapshot();
  });
});

describe('Connected DashboardComponent Component Dispatches Success', () => {
  let wrapper;
  const initialState = {
    fetchAllData: {
      fetchCurrentUserState: '',
      fetchAllUserState: '',
      fetchSaleRecordState: '',
      fetchProductsState: '',
      userData: '',
      saleRecord: '',
      products: '',
      errorMessage: ''
    },
  };
  const mockStore = configureStore([thunk]);
  const store = mockStore(initialState);
  beforeEach(() => {
    const response = {
      data: [],
    };
    axios.get.mockImplementation(() =>
      Promise.resolve({ data: { ...response } }),
    );
    const userData = [];
    const saleRecord = [];
    const products = [];
    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <DashboardContainer
            userData={userData}
            saleRecord={saleRecord}
            products = {products} />
        </MemoryRouter>
      </Provider>,
    );
  });

  it('it should render the connected component', () => {
    expect(wrapper.find(DashboardComponent).length).toEqual(1);
  });

  it('it should dispatch fetchCurrentUser action', () => {
    const storeState = store.getState();
    const storeActions = store.getActions();
    expect(storeActions[0].fetchCurrentUserState).toEqual('FETCHING_CURRENT_USER');
    expect(storeActions[1].fetchAllUserState).toEqual('FETCHING_ALL_USERS');
    expect(storeActions[2].fetchSaleRecordState).toEqual('FETCHING_SALE_RECORD');
    expect(storeActions[3].fetchProductsState).toEqual('FETCHING_PRODUCTS');
    expect(storeActions[4].type).toEqual('ADD_USER_DATA');
  });
});
