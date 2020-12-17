import React, { useState } from 'react';
import { Text, TextInput, StyleSheet, View } from 'react-native';

const Review = () => {
  return (
    <View style={styles.reviewContainer}>
      <Text style={styles.reviewHeader}>Review</Text>
      <Text style={styles.reviewText}>
        This product has an overall rating of 2 which is really poor. Products
        rated 2-4 have a really bad impact on the environment.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  reviewContainer: {
    padding: 24,
  },
  reviewHeader: {
    fontSize: 24,
    paddingBottom: 12,
  },
  reviewText: {
    fontSize: 16,
  },
});

export default Review;
