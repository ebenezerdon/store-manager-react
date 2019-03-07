import React from 'react';
import thunk from 'redux-thunk';
import axios from 'axios';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import AddProductComponent from './AddProductComponent';
import { actions, constants, addProductReducer, types } from './duck';
import { EllipsisLoaderComponent } from '../common/loaders'
import {
  AddProductContainer,
  mapDispatchToProps,
  mapStateToProps,
} from './AddProductContainer';

jest.mock('axios');

const {
  setAddProductState,
  setAddProductError,
  setCheckoutState,
  setCheckoutError
} = actions;

describe('AddProductComponent Component', () => {
  const addProduct = jest.fn();
  it('should render without throwing an error', () => {
    const props = {
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
      addProduct,
    };
    const wrapper = shallow(<AddProductComponent {...props} />);
    wrapper.find('form').simulate('submit', {
      target: {
        elements: {
          productName: {
            value: 'value1',
          },
          description: {
            value: 'value2',
          },
          productImage: {
            value: 'http://staffmobility.eu/sites/default/files/isewtweetbg.jpg',
          },
          price: {
            value: 'value4',
          },
          quantity: {
            value: 'value5',
          },
          minAllowed: {
            value: 'value6',
          },
        },
      },
      preventDefault: () => {},
    });
    expect(addProduct)
      .toHaveBeenCalledWith({
        "description": "value2",
        "minallowed": "value6",
        "price": "value4",
        "productimage": "http://staffmobility.eu/sites/default/files/isewtweetbg.jpg",
        "productname": "value1",
        "quantity":
        "value5"
      });
  });

describe('AddProductComponent Action', () => {
  it('it should setAddProductState', () => {
    const action = setAddProductState(constants.ADDING_PRODUCT);
    expect(action).toEqual({
      type: types.SET_ADD_PRODUCT_STATE,
      addProductState: constants.ADDING_PRODUCT,
    });
  });

  it('it should setAddProductError message', () => {
    const action = setAddProductError(constants.ADD_PRODUCT_ERROR);
    expect(action).toEqual({
      type: types.SET_ADD_PRODUCT_ERROR,
      errorMessage: constants.ADD_PRODUCT_ERROR,
    });
  });

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
    const state = addProductReducer(undefined, {
      type: '@@INIT',
    });
    expect(state.addProductState).toEqual('');
  });
});

describe('AddProductComponent Container', () => {
  it('should show initial state', () => {
    const initialState = {
      addProduct: {
        addProductState: '',
        errorMessage: '',
      },
    };
    expect(mapStateToProps(initialState).addProductState).toEqual('');
    expect(mapStateToProps(initialState).errorMessage).toEqual('');
  });

  it('should dispatch action', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).addProduct();
    expect(typeof dispatch.mock.calls[0][0]).toEqual('function');
  });
});

describe('AddProductComponent Reducers', () => {
  it('should setup default state values', () => {
    const state = addProductReducer(undefined, {
      type: '@@INIT',
    });
    expect(state).toEqual({
      addProductState: '',
      checkoutState: '',
      errorMessage: ''
    });
  });

  it('it should change the addProduct state', () => {
    const action = {
      type: types.SET_ADD_PRODUCT_STATE,
      addProductState: constants.ADDING_PRODUCT,
    };
    const state = addProductReducer(undefined, action);
    expect(state.addProductState).toEqual(constants.ADDING_PRODUCT);
  });

  it('it should change the addProduct error message', () => {
    const action = {
      type: types.SET_ADD_PRODUCT_ERROR,
      errorMessage: 'request failed',
    };
    const state = addProductReducer(undefined, action);
    expect(state.errorMessage).toEqual(action.errorMessage);
  });
});
})

describe('Connected Component Dispatches addProduct Success', () => {
  const initialState = {
    addProduct: {
      addProductState: '',
      errorMessage: '',
    },
  };
  const mockStore = configureStore([thunk]);
  const store = mockStore(initialState);
  let wrapper;
  beforeEach(() => {
    const response = { data: { articles: {} } };
    axios.post.mockResolvedValue(response);
    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <AddProductContainer />
        </MemoryRouter>
      </Provider>,
    );
    wrapper.find('form').simulate('submit', {
      target: {
        elements: {
          productName: {
            value: 'value1',
          },
          description: {
            value: 'value2',
          },
          productImage: {
            value: 'value3',
          },
          price: {
            value: 'value4',
          },
          quantity: {
            value: 'value5',
          },
          minAllowed: {
            value: 'value6',
          },
        },
      },
      preventDefault: () => {},
    });
  });
  it('it should render the connected component', () => {
    expect(wrapper.find(AddProductContainer).length).toEqual(1);
  });

  it('it should dispatch addProduct action', () => {
    const storeActions = store.getActions();
    expect(storeActions[0].type).toEqual('SET_ADD_PRODUCT_STATE');
  });
});

describe('Connected addProduct Component Dispatches Error', () => {
  const initialState = {
    addProduct: {
      addProductState: '',
      errorMessage: '',
    },
  };
  const mockStore = configureStore([thunk]);
  const store = mockStore(initialState);
  let wrapper;
  beforeEach(() => {
    const response = {
      response: { data: { error: 'invalid parameters' } },
    };
    axios.post.mockImplementation(() => Promise.reject(response));
    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <AddProductContainer />
        </MemoryRouter>
      </Provider>,
    );
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {},
      target: {
        elements: {
          productName: {
            value: 'value1',
          },
          description: {
            value: 'value2',
          },
          productImage: {
            value: 'value3',
          },
          price: {
            value: 'value4',
          },
          quantity: {
            value: 'value5',
          },
          minAllowed: {
            value: 'value6',
          },
        },
      },
    });
  });

  it('it should dispatch addProduct error action', () => {
    const storeActions = store.getActions();
    expect(storeActions[0].type).toEqual('SET_ADD_PRODUCT_STATE');
    expect(storeActions[1].type).toEqual('SET_ADD_PRODUCT_STATE');
  });
});
