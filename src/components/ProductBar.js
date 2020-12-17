import React from 'react'
import { Dimensions } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

const ProductBar = ({ title, rating, number }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}: {rating}</Text>
      <View style={styles.bar}>
        <Text style={styles.barText}>{number}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    width: '100%',
  },
  text: {
    marginLeft: 32,
  },
  barText: {
    color: '#FFF'
  },
  bar: {
    flexDirection: 'column',
    marginTop: 24,
    backgroundColor: '#B00505',
    height: 32,
    width: 100,
    borderRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 25,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 25,
  }
})

export default ProductBar