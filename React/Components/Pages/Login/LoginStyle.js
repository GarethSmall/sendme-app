// @flow
import { StyleSheet } from 'react-native';
import AppTheme from '../../../AppTheme/AppTheme';

export default (LoginStyle = StyleSheet.create({
  view: {
    backgroundColor: AppTheme.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: '100%',
    padding: AppTheme.largeSize,
  },
}));
