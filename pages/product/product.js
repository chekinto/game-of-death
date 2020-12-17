import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import ProductReview from './../../src/components/ProductReview'
import ProductBar from './../../src/components/ProductBar'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
    marginBottom: 16,
  },
});

export const ProductScreen = () => {
  return (
    <View style={styles.container}>
      <ProductReview />
      <ProductBar
        title="Usefulness"
        rating="Really Poor"
        number={1}
      />
      <ProductBar
        title="Reusability"
        rating="Poor"
        number={2}
      />
      <ProductBar
        title="Environental impact:"
        rating="Really Poor"
        number={1}
      />
      <ProductBar
        title="Overall"
        rating="Poor"
        number={3}
      />
    </View>
  );
};
