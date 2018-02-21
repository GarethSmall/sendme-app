// @flow
import React, { PureComponent } from 'react';
import ReactNative from 'react-native';
import AppTheme from '../../../AppTheme/AppTheme';

export default class Button extends PureComponent {
  render() {
    const { ...other } = this.props;
    return <ReactNative.Button {...other} color={AppTheme.secondaryColor} />;
  }
}
