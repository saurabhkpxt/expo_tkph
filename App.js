import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Header from "./Header";
import NewCalc from "./NewCalc";
import Home from "./Home";
import LocalCalc from "./LocalCalc";
import CloudCalc from "./CloudCalc";
import TkphDetails from "./TkphDetails";
import { StatusBar } from "react-native";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
let data_sample = [
  {
    date_stamp: "1610022038934",
    date: "07.01.2020",
    mine_details: "RK Transport",
    tyre_size: "18.00-25",
    max_amb_temp: "35",
    cycle_length: "10",
    cycle_duration: "120",
    vehicle_make: "CAT",
    vehicle_model: "170",
    empty_vehicle_weight: "153760",
    pay_load: "249480",
    weight_correction: "0",
    load_dist_front_unloaded: "47",
    load_dist_rear_unloaded: "53",
    load_dist_front_loaded: "33.3",
    load_dist_rear_loaded: "66.7",
    added_by: "saurabh",
    distance_km_per_hour: "5",
    gross_vehicle_weight: "403240",
    k1_dist_coefficient: "1.12",
    k2_temp_coefficient: "0.85",
    avg_tyre_load_front: "51637",
    avg_tyre_load_rear: "43807",
    basic_site_tkph_front: "258",
    basic_site_tkph_rear: "219",
    real_site_tkph_front: "246",
    real_site_tkph_rear: "209",
  },
];

const AvailableCalc = ({ navigation }) => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="LocalCalc"
        component={(props) => (
          <LocalCalc navigation={navigation} data_sample={data_sample} />
        )}
      />
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
        <Stack.Screen
          name="TkphDetails"
          component={(props) => <TkphDetails data_sample={data_sample} />}
          data_sample={data_sample}
        />
        <Stack.Screen
          name="AvailableCalc"
          component={AvailableCalc}
          initialParams={data_sample}
        />
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
