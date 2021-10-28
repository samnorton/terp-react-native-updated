import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../constants';

interface Props {
  title: string;
  restOfProps: void;
  customWidth: any;
}

const Button: React.FC<Props> = ({title, customWidth, ...restOfProps}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {width: customWidth}]}
      {...restOfProps}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.secondary,
    marginTop: 13,
    marginBottom: 10,
    paddingVertical: 16,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 17,
    color: COLORS.white,
    textAlign: 'center',
    ...FONTS.HelveticaBold,
  },
});
export default Button;
