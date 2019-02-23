import React from 'react';
import thunk from 'redux-thunk';
import axios from 'axios';
import configureStore from 'redux-mock-store';
import { Redirect } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { LoginComponent as Login } from './LoginComponent';
import { actions, constants, loginReducer, types } from './duck';
import RingLoaderComponent from '../loaders';
import {
  LoginContainer,
  mapDispatchToProps,
  mapStateToProps,
} from './LoginContainer';

jest.mock('axios');

const { setLoginState, setLoginError } = actions;

describe('Login Component', () => {
  it('should render without throwing an error', () => {
    const loginUser = jest.fn();
    const props = {
      loginUser,
      loginState: '',
      errorMessage: 'Invalid credentials',
      history: {},
    };
    const wrapper = shallow(<Login {...props} />);
    wrapper.find('form').simulate('submit', {
      target: {
        elements: {
          usernameOrEmail: {
            value: 'spicy',
          },
          password: {
            value: 'dicy',
          },
        },
      },
      preventDefault: () => {},
    });
    expect(loginUser).toHaveBeenCalledWith('spicy', 'dicy');
  });

  it('should render an email input', () => {
    expect(shallow(<Login />).find('#usernameOrEmail').length).toEqual(1);
  });

  it('should render a password input', () => {
    expect(shallow(<Login />).find('#password').length).toEqual(1);
  });

  it('should redirect page if login is successful', () => {
    const props = {
      loginUser: () => {},
      loginState: 'LOGIN_SUCCESS',
      errorMessage: '',
    };
    const component = shallow(<Login {...props} />);
    expect(component.containsMatchingElement(<Redirect to="/" />)).toEqual(
      true,
    );
  });

  it('it should render the RingLoaderComponent if logging in', () => {
    const props = {
      loginUser: () => {},
      loginState: 'LOGGING_IN',
      errorMessage: '',
      history: () => {},
    };
    const component = shallow(<Login {...props} />);
    expect(component.contains(<RingLoaderComponent />)).toBe(true);
  });
});

describe('Login Action', () => {
  it('it should set login state', () => {
    const action = setLoginState(constants.LOGGING_IN);
    expect(action).toEqual({
      type: types.SET_LOGIN_STATE,
      loginState: constants.LOGGING_IN,
    });
  });

  it('it should set login error message', () => {
    const action = setLoginError(constants.LOGIN_ERROR);
    expect(action).toEqual({
      type: types.SET_LOGIN_ERROR,
      errorMessage: constants.LOGIN_ERROR,
    });
  });

  it('should setup default state values', () => {
    const state = loginReducer(undefined, {
      type: '@@INIT',
    });
    expect(state).toEqual({
      loginState: '',
      errorMessage: '',
    });
  });
});

describe('Login Container', () => {
  it('should show initial state', () => {
    const initialState = {
      login: {
        loginState: '',
        errorMessage: '',
      },
    };
    expect(mapStateToProps(initialState).loginState).toEqual('');
    expect(mapStateToProps(initialState).errorMessage).toEqual('');
  });

  it('should dispatch action', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).loginUser();
    expect(typeof dispatch.mock.calls[0][0]).toEqual('function');
  });
});

describe('Login Reducers', () => {
  it('should setup default state values', () => {
    const state = loginReducer(undefined, {
      type: '@@INIT',
    });
    expect(state).toEqual({
      loginState: '',
      errorMessage: '',
    });
  });

  it('it should change the login state', () => {
    const action = {
      type: types.SET_LOGIN_STATE,
      loginState: constants.LOGGING_IN,
    };
    const state = loginReducer(undefined, action);
    expect(state.loginState).toEqual(constants.LOGGING_IN);
  });

  it('it should change the login error message', () => {
    const action = {
      type: types.SET_LOGIN_ERROR,
      errorMessage: 'invalid credentials',
    };
    const state = loginReducer(undefined, action);
    expect(state.errorMessage).toEqual(action.errorMessage);
  });
});

describe('Connected Login Component Dispatches Login Success', () => {
  const initialState = {
    login: {
      loginState: '',
      errorMessage: '',
    },
  };
  const mockStore = configureStore([thunk]);
  const store = mockStore(initialState);
  let wrapper;
  beforeEach(() => {
    const response = { data: 'Login successful' };
    axios.post.mockResolvedValue(response);
    wrapper = mount(
      <Provider store={store}>
        <LoginContainer />
      </Provider>,
    );
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {},
      target: {
        elements: {
          usernameOrEmail: { value: 'spicy' },
          password: { value: 'dicy' },
        },
      },
    });
  });
  it('it should render the connected component', () => {
    expect(wrapper.find(Login).length).toEqual(1);
  });

  it('it should dispatch login action', () => {
    const storeActions = store.getActions();
    expect(storeActions[0].type).toEqual('SET_LOGIN_STATE');
  });
});

describe('Connected Login Component Dispatches Login Error', () => {
  const initialState = {
    login: {
      loginState: '',
      errorMessage: '',
    },
  };
  const mockStore = configureStore([thunk]);
  const store = mockStore(initialState);
  let wrapper;
  beforeEach(() => {
    const response = {
      response: { data: { error: 'invalid credentials' } },
    };
    axios.post.mockImplementation(() => Promise.reject(response));
    wrapper = mount(
      <Provider store={store}>
        <LoginContainer />
      </Provider>,
    );
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {},
      target: {
        elements: {
          usernameOrEmail: { value: 'bugsburney' },
          password: { value: 'bugsbugs' },
        },
      },
    });
  });

  it('it should dispatch login error action', () => {
    const storeActions = store.getActions();
    expect(storeActions[0].type).toEqual('SET_LOGIN_STATE');
    expect(storeActions[1].type).toEqual('SET_LOGIN_ERROR');
  });
});
