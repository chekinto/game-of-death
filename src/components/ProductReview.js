import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start'
  },
  image: {
    width: 400,
    height: 380,

  }
})

const ProductReview = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/hoopa.jpg')}
      />
    </View>
  )
}

export default ProductReview

