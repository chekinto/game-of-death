import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Deer from './assets/deer.svg'
import Cloud from './assets/cloud.svg'
import String from './assets/string.svg'
import Triangle from './assets/triangle.svg'
import Logo from './assets/logo.svg'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from './pages/home/home';

import * as firebase from 'firebase';

import 'firebase/firestore';
import { useEffect } from 'react';
import { useState } from 'react';
import { ProductScreen } from './pages/product/product';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBxTPOmBYIkGGDVLdB7LM_heKeV3db7eys",
  authDomain: "projectfuture-2b7da.firebaseapp.com",
  projectId: "projectfuture-2b7da",
  storageBucket: "projectfuture-2b7da.appspot.com",
  messagingSenderId: "905274743671",
  appId: "1:905274743671:web:3b3c916be0ae076b379f72",
  measurementId: "G-995ZB0CW38"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


const dbh = firebase.firestore();

const Stack = createStackNavigator();

export default function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    dbh.collection('products').onSnapshot(getCollection);
  }, [])

  const getCollection = (querySnapshot) => {
    const dataArr = [];
    querySnapshot.forEach((res) => {
      dataArr.push(res.data());
    });
    setProducts(dataArr);
  }

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Product" component={ProductScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <View style={styles.container}>
        <Text style={styles.text}>Gift of Death</Text>
        <StatusBar style="auto" />
        <Triangle style={styles.triangle} />
        <String style={styles.string} />
        <Deer style={styles.deer} onClick={() => alert('hello')} />
        <Cloud style={styles.cloud} />
        <Logo style={styles.logo} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0000',
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
