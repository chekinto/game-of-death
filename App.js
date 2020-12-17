import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as firebase from 'firebase';

import 'firebase/firestore';
import { useEffect } from 'react';
import { useState } from 'react';

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
    <View style={styles.container}>
      {products.map(product => (
        <>
          <Text key={product.image}>{JSON.stringify(product)}</Text>
        </>
      ))}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
