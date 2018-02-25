// We'll need to import react to use react component syntax
import React from 'react';
// We'll need to import Enzyme to configure our adapter and shallow to shallowly mount are component
import Enzyme, { shallow } from 'enzyme';
// We'll need enzyme react adapter to use enzyme to test react
import Adapter from 'enzyme-adapter-react-16';
import AuthenticatePage from './AuthenticatePage';
// import json conversion function
import toJSON from 'enzyme-to-json';
// import our initial user state
import { initialState as userInitialState } from '../../../../Redux/Reducers/User';
// import our mock store
import configureStore from 'redux-mock-store';
// Set enzymes adapter to enzyme-adapter-react-16
Enzyme.configure({ adapter: new Adapter() });

// create our mock store
const mockStore = configureStore([]);
// create our initial state
const initialState = {
  User: {
    userInitialState,
  },
};

// describe our test suite
describe('AuthenticatePage', () => {
  //define a test case
  test('should render logged out', () => {
    // mount component
    const component = shallow(<AuthenticatePage />, { context: { store: mockStore(initialState) } });
    // convert to JSON tree
    const tree = toJSON(component);
    // test that our component matches the snapshot
    expect(tree).toMatchSnapshot();
  });
  test('should render logged in', () => {
    initialState.User.isLoggedIn = true;
    const component = shallow(<AuthenticatePage />, { context: { store: mockStore(initialState) } });
    const tree = toJSON(component);
    expect(tree).toMatchSnapshot();
  });
});
