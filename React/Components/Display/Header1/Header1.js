// @flow
import React, { PureComponent } from 'react';
import { Text } from 'react-native';
import HeaderStyle from './HeaderStyle';

type Props = {
  style? : Object,
};

export default class Header1 extends PureComponent<Props> {
  render() {
    const { style } = this.props;
    return <Text style={[HeaderStyle.header, style]}>{this.props.children}</Text>;
  }
}
