// @flow
import { StyleSheet } from 'react-native';
import AppTheme from '../../../AppTheme/AppTheme';

const LoginStyle = StyleSheet.create({
  view: {
    backgroundColor: AppTheme.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: '100%',
    padding: AppTheme.largeSize,
  },
});

export default LoginStyle;
