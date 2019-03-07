import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import NavbarComponent from './NavbarComponent';

global.localStorage = {
  getItem: key => {
    return this.store[key] || null;
  },
  setItem: (key, value) => {
    this.store[key] = value.toString();
  },
  removeItem(key) {
    delete this.store[key];
  },
};

describe(' Component', () => {
  it('should render the navbar component', () => {
    localStorage.removeItem('token');
    const initialState = {
      signup: {
        signupState: '',
      },
      login: {
        loginState: '',
      },
    };
    const mockStore = configureStore([thunk]);
    const store = mockStore(initialState);
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <NavbarComponent />
        </MemoryRouter>
      </Provider>,
    );
    expect(wrapper.exists()).toBe(true);
  });

  it('should render the logout button when user is logged in', () => {
    localStorage.setItem('token', 'sometoken');
    const initialState = {
      signup: {
        signupState: '',
      },
      login: {
        loginState: '',
      },
    };
    const mockStore = configureStore([thunk]);
    const store = mockStore(initialState);
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <NavbarComponent />
        </MemoryRouter>
      </Provider>,
    );
    const logoutButton = wrapper
      .find('Link[onClick]')
      .at(0)
      .props();
    expect(logoutButton.children).toEqual('Logout');
  });

  it('should delete auth token when user clicks logout on main navbar', () => {
    const initialState = {
      signup: {
        signupState: '',
      },
      login: {
        loginState: '',
      },
    };
    const mockStore = configureStore([thunk]);
    const store = mockStore(initialState);
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <NavbarComponent />
        </MemoryRouter>
      </Provider>,
    );
    wrapper
      .find('Link[onClick]')
      .at(0)
      .simulate('click');
    expect(localStorage.getItem('accesstoken')).toEqual(null);
  });
});
