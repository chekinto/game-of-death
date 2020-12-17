import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import Deer from './assets/deer.svg'
import Cloud from './assets/cloud.svg'
import String from './assets/string.svg'
import Triangle from './assets/triangle.svg'
import Logo from './assets/logo.svg'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Gift of Death</Text>
      <StatusBar style="auto" />
      <Triangle style={styles.triangle} />
      <String style={styles.string} />
      <Deer style={styles.deer} onClick={() => alert('hello')} />
      <Cloud style={styles.cloud} />
      <Logo style={styles.logo} />
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
  triangle: {
    position: 'absolute',
    top: 0,
    width: 119,
    height: 40,
  },
  string: {
    position: 'absolute',
    width: 46,
    height: 280,
    top: 0,
    zIndex: 3,
  },
  deer: {
    justifyContent: 'center',
    zIndex: 2,
    width: 325,
    height: 377,
    marginBottom: 40
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
  logo: {
    position: 'absolute',
    bottom: 10,
    zIndex: 100,
    width: 200,
  }
});
