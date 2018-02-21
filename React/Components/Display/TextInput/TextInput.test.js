// @flow
import React from 'react';
import TextInput from './';
import renderer from 'react-test-renderer';

describe('TextInput ', () => {
  test('should render', () => {
    const tree = renderer.create(
      <TextInput  />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
