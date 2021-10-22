import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
interface Props {}

const App: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Home</Text>
    </View>
  );
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
