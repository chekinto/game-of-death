import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';

const ProductHeader = () => {
  const productName = 'Thumb Wars';
  const merchantName = 'Men Kind';
  const merchantLogo =
    'https://voucher.ninja/wp-content/uploads/2017/02/menkind.png';
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerCol}>
        <Text style={styles.header}>{productName}</Text>
        <Text style={styles.subHeader}>By {merchantName}.</Text>
      </View>
      <View style={styles.headerCol}>
        <Image
          style={styles.logo}
          source={{ uri: merchantLogo }}
          PlaceholderContent={<ActivityIndicator />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    padding: 24,
    borderBottomWidth: 16,
    borderBottomColor: '#B5D8D2',
  },
  headerCol: {
    width: 'auto',
  },
  header: {
    fontSize: 20,
  },
  subHeader: {
    fontSize: 16,
  },
  logo: {
    resizeMode: 'contain',
    width: 120,
    height: 45,
  },
});

export default ProductHeader;
