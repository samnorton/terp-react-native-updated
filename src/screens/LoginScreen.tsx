import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
interface Props {}

const LoginScreen: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default LoginScreen;
