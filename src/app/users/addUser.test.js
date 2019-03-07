import React from 'react';
import thunk from 'redux-thunk';
import axios from 'axios';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import AddUserComponent from './AddUserComponent';
import { actions, constants, addUserReducer, types } from './duck';
import { EllipsisLoaderComponent } from '../common/loaders'
import {
  AddUserContainer,
  mapDispatchToProps,
  mapStateToProps,
} from './AddUserContainer';

jest.mock('axios');

const {
  setAddUserState,
  setAddUserError,
} = actions;

describe('AddUserComponent Component', () => {
  const addUser = jest.fn();
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
      addUser,
    };
    const wrapper = shallow(<AddUserComponent {...props} />);
    wrapper.find('form').simulate('submit', {
      target: {
        elements: {
          fullName: {
            value: 'value1',
          },
          emailAddress: {
            value: 'value2',
          },
          phoneNumber: {
            value: 'value3',
          },
          userImage: {
            value: 'value4',
          },
          password: {
            value: 'value5',
          },
          role: {
            value: 'value6',
          },
        },
      },
      preventDefault: () => {},
    });
    expect(addUser)
      .toHaveBeenCalledWith({
        "emailaddress": "value2",
        "fullname": "value1",
        "password": "value5",
        "phonenumber": "value3",
        "role": "value6",
        "userimage": "value4"
      });
  });

describe('AddUserComponent Action', () => {
  it('it should setAddUserState', () => {
    const action = setAddUserState(constants.ADDING_USER);
    expect(action).toEqual({
      type: types.SET_ADD_USER_STATE,
      addUserState: constants.ADDING_USER,
    });
  });

  it('it should setAddUserError message', () => {
    const action = setAddUserError(constants.ADD_USER_ERROR);
    expect(action).toEqual({
      type: types.SET_ADD_USER_ERROR,
      errorMessage: constants.ADD_USER_ERROR,
    });
  });

  it('should setup default state values', () => {
    const state = addUserReducer(undefined, {
      type: '@@INIT',
    });
    expect(state.addUserState).toEqual('');
  });
});

describe('AddUser Container', () => {
  it('should show initial state', () => {
    const initialState = {
      addUser: {
        addUserState: '',
        errorMessage: '',
      },
    };
    expect(mapStateToProps(initialState).addUserState).toEqual('');
    expect(mapStateToProps(initialState).errorMessage).toEqual('');
  });

  it('should dispatch action', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).addUser();
    expect(typeof dispatch.mock.calls[0][0]).toEqual('function');
  });
});

describe('AddUserComponent Reducers', () => {
  it('should setup default state values', () => {
    const state = addUserReducer(undefined, {
      type: '@@INIT',
    });
    expect(state).toEqual({
      addUserState: '',
      errorMessage: ''
    });
  });

  it('it should change the addUser state', () => {
    const action = {
      type: types.SET_ADD_USER_STATE,
      addUserState: constants.ADDING_USER,
    };
    const state = addUserReducer(undefined, action);
    expect(state.addUserState).toEqual(constants.ADDING_USER);
  });

  it('it should change the addUser error message', () => {
    const action = {
      type: types.SET_ADD_USER_ERROR,
      errorMessage: 'request failed',
    };
    const state = addUserReducer(undefined, action);
    expect(state.errorMessage).toEqual(action.errorMessage);
  });
});
})

describe('Connected Component Dispatches addUser Success', () => {
  const initialState = {
    addUser: {
      addUserState: '',
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
          <AddUserContainer />
        </MemoryRouter>
      </Provider>,
    );
    wrapper.find('form').simulate('submit', {
      target: {
        elements: {
          fullName: {
            value: 'value1',
          },
          emailAddress: {
            value: 'value2',
          },
          phoneNumber: {
            value: 'value3',
          },
          userImage: {
            value: 'value4',
          },
          password: {
            value: 'value5',
          },
          role: {
            value: 'value6',
          },
        },
      },
      preventDefault: () => {},
    });
  });
  it('it should render the connected component', () => {
    expect(wrapper.find(AddUserContainer).length).toEqual(1);
  });

  it('it should dispatch addUser action', () => {
    const storeActions = store.getActions();
    expect(storeActions[0].type).toEqual('SET_ADD_USER_STATE');
  });
});

describe('Connected addUser Component Dispatches Error', () => {
  const initialState = {
    addUser: {
      addUserState: '',
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
          <AddUserContainer />
        </MemoryRouter>
      </Provider>,
    );
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {},
      target: {
        elements: {
          fullName: {
            value: 'value1',
          },
          emailAddress: {
            value: 'value2',
          },
          phoneNumber: {
            value: 'value3',
          },
          userImage: {
            value: 'value4',
          },
          password: {
            value: 'value5',
          },
          role: {
            value: 'value6',
          },
        },
      },
    });
  });

  it('it should dispatch addUser error action', () => {
    const storeActions = store.getActions();
    expect(storeActions[0].type).toEqual('SET_ADD_USER_STATE');
    expect(storeActions[1].type).toEqual('SET_ADD_USER_STATE');
  });
});
