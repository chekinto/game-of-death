import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';

const ProductBar = ({ title, rating }) => {
  return (
    <View style={styles.container}>
      <Text>{title}: {rating}</Text>
      <View style={styles.bar}>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  },
  bar: {
    marginTop: 24,
    backgroundColor: '#B00505',
    height: 32,
    borderRadius: 8,
    alignSelf: 'stretch'
  }
})

export default ProductBar