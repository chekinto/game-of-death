import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Deer from './assets/deer.svg'
import Cloud from './assets/cloud.svg'
import String from './assets/string.svg'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <String style={styles.string} />
      <Deer style={styles.deer} onClick={() => alert('hello')} />
      <Cloud style={styles.cloud} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  deer: {
    justifyContent: 'center',
    zIndex: 2,
    width: 325,
    height: 377
  },
  cloud: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    height: 200,
    width: '100%'
  },
  string: {
    position: 'absolute',
    width: 46,
    height: 359,
    top: -20,
    zIndex: 3,
  }
});
