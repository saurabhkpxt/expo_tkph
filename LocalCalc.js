import React, { Component, useState, useEffect } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  TextInput,
  FlatList,
} from "react-native";
import Header from "./Header";
import * as FileSystem from "expo-file-system";
import TkphCard from "./TkphCard";
import * as SQLite from "expo-sqlite";

function useForceUpdate() {
  const [value, setValue] = useState(0);
  return [() => setValue(value + 1), value];
}

export default ({ navigation, data_sample }) => {
  const [data, setData] = useState("Change this text");
  const [forceUpdate, forceUpdateId] = useForceUpdate();
  const [dataArray, setDataArray] = useState([
    {
      date_stamp: Date.now(),
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
  ]);
  const [values, setValues] = useState({
    date_stamp: Date.now(),
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
  });

  let fileUri = "/xyz123.db";
  const db = SQLite.openDatabase(fileUri);
  useEffect(() => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "create table if not exists items (date_stamp TEXT primary key not null, date TEXT,mine_details TEXT,tyre_size TEXT,max_amb_temp TEXT,cycle_length TEXT,cycle_duration TEXT,vehicle_make TEXT,vehicle_model TEXT,empty_vehicle_weight TEXT,pay_load TEXT,weight_correction TEXT,load_dist_front_unloaded TEXT,load_dist_rear_unloaded TEXT,load_dist_front_loaded TEXT,load_dist_rear_loaded TEXT,added_by TEXT,distance_km_per_hour TEXT,gross_vehicle_weight TEXT,k1_dist_coefficient TEXT,k2_temp_coefficient TEXT,avg_tyre_load_front TEXT,avg_tyre_load_rear TEXT,basic_site_tkph_front TEXT,basic_site_tkph_rear TEXT,real_site_tkph_front TEXT,real_site_tkph_rear TEXT);"
        );
        tx.executeSql("select * from items", [], (_, { rows }) => {
          console.log(rows["_array"]);
          setDataArray(rows["_array"]);
          setData(JSON.stringify(rows["_array"]));
        });
      },
      null,
      forceUpdate
    );
  }, []);

  const changeSqlText = () => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "create table if not exists items (date_stamp TEXT primary key not null, date TEXT,mine_details TEXT,tyre_size TEXT,max_amb_temp TEXT,cycle_length TEXT,cycle_duration TEXT,vehicle_make TEXT,vehicle_model TEXT,empty_vehicle_weight TEXT,pay_load TEXT,weight_correction TEXT,load_dist_front_unloaded TEXT,load_dist_rear_unloaded TEXT,load_dist_front_loaded TEXT,load_dist_rear_loaded TEXT,added_by TEXT,distance_km_per_hour TEXT,gross_vehicle_weight TEXT,k1_dist_coefficient TEXT,k2_temp_coefficient TEXT,avg_tyre_load_front TEXT,avg_tyre_load_rear TEXT,basic_site_tkph_front TEXT,basic_site_tkph_rear TEXT,real_site_tkph_front TEXT,real_site_tkph_rear TEXT);"
        );
        tx.executeSql("select * from items", [], (_, { rows }) => {
          console.log(rows["_array"]);
          setDataArray(rows["_array"]);
          setData(JSON.stringify(rows["_array"]));
        });
      },
      null,
      forceUpdate
    );
  };
  const [text, setText] = React.useState(null);

  const addSqlDb = () => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "create table if not exists items (date_stamp TEXT primary key not null, date TEXT,mine_details TEXT,tyre_size TEXT,max_amb_temp TEXT,cycle_length TEXT,cycle_duration TEXT,vehicle_make TEXT,vehicle_model TEXT,empty_vehicle_weight TEXT,pay_load TEXT,weight_correction TEXT,load_dist_front_unloaded TEXT,load_dist_rear_unloaded TEXT,load_dist_front_loaded TEXT,load_dist_rear_loaded TEXT,added_by TEXT,distance_km_per_hour TEXT,gross_vehicle_weight TEXT,k1_dist_coefficient TEXT,k2_temp_coefficient TEXT,avg_tyre_load_front TEXT,avg_tyre_load_rear TEXT,basic_site_tkph_front TEXT,basic_site_tkph_rear TEXT,real_site_tkph_front TEXT,real_site_tkph_rear TEXT);"
        );
        values["date_stamp"] = Date.now();
        Object.values(values);
        console.log(JSON.stringify(Object.keys(values)));
        const len = JSON.stringify(Object.keys(values)).length;
        const sqlFields = JSON.stringify(Object.keys(values)).slice(1, len - 1);
        const sqlValues = Object.values(values);
        console.log(sqlFields);
        tx.executeSql(
          `insert into items (${sqlFields}) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
          sqlValues
        );
        tx.executeSql("select * from items", [], (_, { rows }) =>
          console.log(JSON.stringify(rows["_array"]))
        );
      },
      null,
      forceUpdate
    );
  };

  return (
    <View style={styles.header}>
      {/*<Header />
      <Text>{data}</Text>*/}
      <Button title="Add SQL DB" onPress={addSqlDb} />
      <Button title="Change SQL Text" onPress={changeSqlText} />
      <FlatList
        data={dataArray}
        renderItem={({ item }) => (
          <TkphCard navigation={navigation} data_sample={item} />
        )}
      />
      {/*

      <ScrollView>
        <TkphCard navigation={navigation} data_sample={data_sample} />
        <TkphCard navigation={navigation} data_sample={data_sample} />
        <TkphCard navigation={navigation} data_sample={data_sample} />
        <TkphCard navigation={navigation} data_sample={data_sample} />
        <TkphCard navigation={navigation} data_sample={data_sample} />
      </ScrollView>
      */}
      <Button
        title="Go back to home screen"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: StatusBar.currentHeight,
  },
  logo: {
    height: 80,
  },
});
