// @flow
import React, { PureComponent } from 'React';
import ButtonStyle from './ButtonStyle';
import ReactNative from 'react-native';

export default class Button extends PureComponent {
  render() {
    const { style, ...other } = this.props;
    return (
      <ReactNative.Button
        {...other}
        style={[ ButtonStyle.button, style ]}
      />
    );
  }
}