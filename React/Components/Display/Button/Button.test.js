// @flow
import React from 'react';
import Button from './';
import renderer from 'react-test-renderer';

describe('Button', () => {
  test('should render', () => {
    const tree = renderer.create(
      <Button title="Test Button"  />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

