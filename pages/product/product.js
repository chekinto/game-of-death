import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ProductReview from './../../src/components/ProductReview';
import ProductBar from './../../src/components/ProductBar';
import ProductHeader from './../../src/components/ProductHeader';
import Review from './../../src/components/Review';

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
      <ProductHeader />
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
        title="Environmental impact"
        rating="Really Poor"
        number={1}
      />
      <ProductBar
        title="Overall"
        rating="Poor"
        number={3}
      />
      <ProductBar title='Usefulness' rating='Really Poor' />
      <Review />
    </View>
  );
};
