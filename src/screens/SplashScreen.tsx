import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
interface Props {}

const SplashScreen: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text>Splash Screen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default SplashScreen;
