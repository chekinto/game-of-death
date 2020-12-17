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
    paddingTop: 16,
    paddingBottom: 16
  },
  text: {
    marginLeft: 16,
  },
  barText: {
    color: '#FFF',
    alignSelf: 'flex-end',
    paddingRight: 16,
    paddingTop: 8,
    fontSize: 21
  },
  bar: {
    flexDirection: 'column',
    marginTop: 8,
    marginBottom: 0,
    backgroundColor: '#B00505',
    height: 40,
    width: 100,
    borderRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 25,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 25,
    alignItems: 'center'
  }
})

export default ProductBar