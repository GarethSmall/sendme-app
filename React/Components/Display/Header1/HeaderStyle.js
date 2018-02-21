// @flow
import { StyleSheet } from 'react-native';
import AppTheme from '../../../AppTheme/AppTheme';

export default (HeaderStyle = StyleSheet.create({
  header: {
    fontFamily: AppTheme.fontFamily,
    fontWeight: 'bold',
    fontSize: AppTheme.header1,
    color: AppTheme.whiteColor,
    padding: AppTheme.largeSize,
  },
}));
