import React, { useState } from 'react';
import { Text, TextInput, StyleSheet, View } from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.searchBarContainer}>
      <TextInput
        style={styles.searchBar}
        placeholder='Enter URL or scan a product…'
      ></TextInput>
      <View style={styles.searchIconContainer}>
        <Text style={styles.searchBarIcon}>Go</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    backgroundColor: '#fff',
    margin: 24,
    zIndex: 999,
    width: 366,
    height: 52,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#ececec',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    paddingLeft: 16,
  },
  searchBar: {
    backgroundColor: '#fff',
  },
  searchIconContainer: {
    backgroundColor: '#B5D8D2',
    width: 48,
    height: 48,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#B5D8D2',
  },
  searchBarText: {
    color: '#000000',
    paddingTop: 16,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 8,
  },
  searchBarIcon: {
    paddingTop: 13,
    paddingBottom: 8,
    paddingLeft: 13,
    paddingRight: 8,
    color: '#fff',
  },
});

export default SearchBar;
