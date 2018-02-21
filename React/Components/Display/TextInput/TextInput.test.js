// @flow
import React from 'react';
import TextInput from './';
const { describe, test, expect } = global;
import renderer from 'react-test-renderer';

describe('TextInput ', () => {
  test('should render', () => {
    const tree = renderer.create(
      <TextInput  />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
