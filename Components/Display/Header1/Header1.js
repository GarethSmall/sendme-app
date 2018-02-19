// @flow
import React, { PureComponent } from 'react';
import { Text } from 'react-native';
import HeaderStyle from './HeaderStyle';

export default class Header1 extends PureComponent {
  render() {
    return (
      <Text style={HeaderStyle.header}>
        {this.props.children}
      </Text>
    );
  }
}