import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
interface Props {}

const RegisterScreen: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text>Register Screen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default RegisterScreen;
