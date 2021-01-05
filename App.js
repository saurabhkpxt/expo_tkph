import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Header from "./Header";
import NewCalc from "./NewCalc";
import Home from "./Home";
import LocalCalc from "./LocalCalc";
import CloudCalc from "./CloudCalc";
import { StatusBar } from "react-native";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const AvailableCalc = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="LocalCalc" component={LocalCalc} />
      <Tabs.Screen name="CloudCalc" component={CloudCalc} />
    </Tabs.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="NewCalc" component={NewCalc} />
        <Stack.Screen name="AvailableCalc" component={AvailableCalc} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  app: {
    flexGrow: 1,
    marginTop: StatusBar.currentHeight,
  },
});
