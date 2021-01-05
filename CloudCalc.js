import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View, StatusBar } from "react-native";
import Header from "./Header";

export default ({ navigation }) => (
  <View style={styles.header}>
    <Header />
    <Text>Cloud Calculations</Text>
    <Button title="Local Storage" onPress={() => navigation.navigate("Home")} />
    <Button title="Cloud Storage" onPress={() => navigation.navigate("Home")} />
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
