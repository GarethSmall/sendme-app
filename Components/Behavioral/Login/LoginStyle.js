// @flow
import { StyleSheet } from 'react-native';
import AppTheme from '../../../AppTheme/AppTheme';

export default LoginStyle = StyleSheet.create({
  view: {
    backgroundColor: AppTheme.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1,
    padding: AppTheme.largeSize,
  },
  username : {
    height: 40,
    alignSelf: 'stretch',
    borderColor: 'gray',
    borderWidth: 1,
  },
});