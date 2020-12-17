import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from 'expo-status-bar';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff0000",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const ProductScreen = () => {
  return (
    <View style={styles.container}>
        <Text>Product</Text>
    </View>
  );
};
