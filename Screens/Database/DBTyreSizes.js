import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View, StatusBar } from "react-native";
import Header from "../../Header";

export default ({ navigation }) => (
  <View style={styles.header}>
    <Header />
    <Text>Tyre Sizes</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    marginTop: StatusBar.currentHeight,
  },
  logo: {
    height: 80,
  },
});
