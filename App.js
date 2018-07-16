import React from 'react';
import { StyleSheet, View } from 'react-native';
import HealthComponent from './src/HealthComponent';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App = () => (
  <View style={styles.container}>
    <HealthComponent />
  </View>
);

export default App;
