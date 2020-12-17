import React, { useState } from "react";
import DropShadow from "react-native-drop-shadow";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Deer from "../../assets/deer.svg";
import Cloud from "../../assets/cloud.svg";
import String from "../../assets/string.svg";
import Triangle from "../../assets/triangle.svg";
import Logo from "../../assets/logo.svg";
import SearchBar from "../../src/components/SearchBar";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff0000",
    alignItems: "center",
    justifyContent: "center",
  },
  triangle: {
    position: "absolute",
    top: 0,
    width: 119,
    height: 40,
  },
  string: {
    position: "absolute",
    width: 46,
    height: 160,
    top: 32,
    zIndex: 3,
  },
  deer: {
    justifyContent: "center",
    zIndex: 2,
    width: 325,
    height: 377,
    marginBottom: 40,
  },
  cloud: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    height: 200,
    width: "100%",
  },
  logo: {
    color: "black",
    position: "absolute",
    bottom: 50,
    zIndex: 100,
    width: 1000,
  },
});

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Triangle style={styles.triangle} />
      <StatusBar style="auto" />
      <String style={styles.string} />
      <Deer
        onPress={() => {
          navigation.navigate("Product");
        }}
        style={styles.deer}
      />
      <Cloud style={styles.cloud} />
      <SearchBar
        navigation={navigation}
      />
    </View>
  );
};
