import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProductHeader from './src/components/ProductHeader';

export default function App() {
  return (
    <View style={styles.container}>
      <ProductHeader />
      <Text style={styles.text}>Gift of Death</Text>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#456abc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 32,
  },
});
