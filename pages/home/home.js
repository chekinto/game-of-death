import React from "react";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { StatusBar } from 'expo-status-bar';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff0000",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Text>Home</Text>
        <Button title="To Product" onPress={() => { navigation.navigate('Product')}}>To Product</Button>
    </View>
  );
};
