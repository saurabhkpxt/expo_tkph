import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View, StatusBar } from "react-native";
import Header from "./Header";

export default ({ history }) => (
  <View style={styles.header}>
    <Text>This is home screen!!!</Text>
    <Header />
    <Button
      title="New Calculation"
      onPress={() => {
        5;
      }}
    />
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
