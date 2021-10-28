import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../constants';

interface Props {
  title: string;
  restOfProps: void;
}

const Button: React.FC<Props> = ({title, ...restOfProps}) => {
  return (
    <TouchableOpacity style={styles.button} {...restOfProps}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    width: 300,
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
