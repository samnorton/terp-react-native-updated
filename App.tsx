import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LoginScreen from './src/screens/LoginScreen';

interface Props {}

const App: React.FC<Props> = () => {
  return <LoginScreen />;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    fontSize: 20,
  },
});
export default App;
