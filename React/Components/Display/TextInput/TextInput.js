// @flow
import React, { PureComponent } from 'React';
import TextInputStyle from './TextInputStyle';
import ReactNative from 'react-native';

export default class TextInput extends PureComponent {
  render() {
    const { style, ...other } = this.props;
    return (
      <ReactNative.TextInput
        {...other}
        style={[ TextInputStyle.input, style ]}
      />
    );
  }
}