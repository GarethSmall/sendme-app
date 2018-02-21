// @flow
import { StyleSheet } from 'react-native';
import AppTheme from '../../../AppTheme/AppTheme';

const TextInputStyle = StyleSheet.create({
  input: {
    height: 45,
    alignSelf: 'stretch',
    marginBottom: AppTheme.largeSize,
    padding: AppTheme.mediumSize,
    backgroundColor: AppTheme.whiteColor,
    borderRadius: AppTheme.smallSize,
  },
});

export default TextInputStyle;