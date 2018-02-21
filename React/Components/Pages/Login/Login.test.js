// @flow
import React from 'react';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import shallow from 'enzyme/shallow';
import Login from './';
const { describe, test, expect } = global;

import { initialState as userInitialState } from '../../../../Redux/Reducers/User';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);
const initialState = {
  User: {
    userInitialState,
  },
};

Enzyme.configure({ adapter: new Adapter() });

describe('Login ', () => {
  test('should render', () => {
    const component = shallow(<Login />, { context: { store: mockStore(initialState) } });
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
  });
});
