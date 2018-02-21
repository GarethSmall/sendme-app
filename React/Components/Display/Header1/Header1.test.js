// @flow
import React from 'react';
import Header1 from './';
import renderer from 'react-test-renderer';

describe('Header1', () => {
  test('should render', () => {
    const tree = renderer.create(
      <Header1  />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

