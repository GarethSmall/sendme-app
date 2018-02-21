// @flow
import React from 'react';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import shallow from 'enzyme/shallow';
import Button from './';
const { describe, test, expect } = global;

Enzyme.configure({ adapter: new Adapter() });

describe('Button ', () => {
  test('should render', () => {
    const component = shallow(<Button title="Test Button" onPress={() => {}} />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
  });
});
