import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

interface Props {
  errorMessage: any;
  visible: any;
}

const ErrorMessage: React.FC<Props> = ({errorMessage, visible}) => {
  if (!visible || !errorMessage) return null;
  return <Text style={styles.errorMessage}>{errorMessage}</Text>;
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 13,
    color: COLORS.primary,
    textAlign: 'center',
  },
});
export default ErrorMessage;
