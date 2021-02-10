import React, { Component, useState, useEffect } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  StatusBar,
  FlatList,
} from "react-native";
import Header from "../../Header";
import * as FileSystem from "expo-file-system";
import * as SQLite from "expo-sqlite";

function useForceUpdate() {
  const [value, setValue] = useState(0);
  return [() => setValue(value + 1), value];
}

export default ({ navigation }) => {
  const [data, setData] = useState("Change this text");
  const [cycleLengthInput, setCycleLengthInput] = useState("1");
  const [k1CoefficientInput, setK1CoefficientInput] = useState("2");
  const [forceUpdate, forceUpdateId] = useForceUpdate();
  const [addForm, setAddForm] = useState(false);
  const [content, setContent] = useState(<View></View>);
  const [dataArray, setDataArray] = useState([
    {
      cycle_length: 1,
      k1_coefficient: 1,
    },
  ]);
  const [values, setValues] = useState({
    cycle_length: 2,
    k1_coefficient: 1,
  });
  let fileUri = "/xyz12345795.db";
  const db = SQLite.openDatabase(fileUri);
  useEffect(() => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "create table if not exists k1coefficient (cycle_length TEXT primary key not null, k1_coefficient TEXT);"
        );
        tx.executeSql("select * from k1coefficient", [], (_, { rows }) => {
          console.log(rows["_array"]);
          setDataArray(rows["_array"]);
          setData(JSON.stringify(rows["_array"]));
          fill;
        });
      },
      null,
      forceUpdate
    );
  }, []);

  function addK1Coefficient() {
    console.log("adding");
    db.transaction(
      (tx) => {
        values["cycle_length"] = cycleLengthInput;
        values["k1_coefficient"] = k1CoefficientInput;
        const len = JSON.stringify(Object.keys(values)).length;
        const sqlFields = JSON.stringify(Object.keys(values)).slice(1, len - 1);
        const sqlValues = Object.values(values);
        console.log(sqlFields);

        tx.executeSql(
          `insert into k1coefficient (${sqlFields}) values (?,?)`,
          sqlValues
        );
        tx.executeSql("select * from k1coefficient", [], (_, { rows }) => {
          console.log(rows["_array"]);
          setDataArray(rows["_array"]);
          setData(JSON.stringify(rows["_array"]));
        });
      },
      null,
      forceUpdate
    );
  }
  function update() {
    db.transaction(
      (tx) => {
        values["cycle_length"] = cycleLengthInput;
        values["k1_coefficient"] = k1CoefficientInput;
        const len = JSON.stringify(Object.keys(values)).length;
        const sqlFields = JSON.stringify(Object.keys(values)).slice(1, len - 1);
        const sqlValues = Object.values(values);
        console.log(sqlFields);

        tx.executeSql(
          `insert into k1coefficient (${sqlFields}) values (?,?)`,
          sqlValues
        );
        tx.executeSql("select * from k1coefficient", [], (_, { rows }) => {
          console.log(rows["_array"]);
          console.log("this is that");
          setDataArray(rows["_array"]);
          setData(JSON.stringify(rows["_array"]));
        });
      },
      null,
      forceUpdate
    );
  }

  let x = (
    <View>
      <Text>K1 Coefficient</Text>
      <View style={styles.ltCombo}>
        <Text style={styles.level}>Cycle Length</Text>
        <Text style={styles.level}>K1 Coefficient</Text>
      </View>
      <FlatList
        style={styles.flatList}
        data={dataArray}
        renderItem={({ item }) => (
          <View style={styles.ltCombo}>
            <Text style={styles.level}>{item["cycle_length"]}</Text>
            <Text style={styles.level}>{item["k1_coefficient"]}</Text>
          </View>
        )}
      />
      <View style={styles.ltCombo}>
        <Text style={styles.level}>1</Text>
        <Text style={styles.level}>1</Text>
      </View>
      <View style={styles.ltCombo}>
        <Text style={styles.level}>2</Text>
        <Text style={styles.level}>1</Text>
      </View>
    </View>
  );

  let y = (
    <View>
      <Text>Add New Coefficient</Text>
      <View style={styles.ltCombo}>
        <Text style={styles.level}>Cycle Length</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setCycleLengthInput(text)}
          placeholder="Enter cycle length"
        />
      </View>
      <View style={styles.ltCombo}>
        <Text style={styles.level}>K1 Coefficient</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setK1CoefficientInput(text)}
          placeholder="Enter k1 coefficient"
        />
      </View>
      <Button title="Add" onPress={addK1Coefficient} />
    </View>
  );
  useEffect(() => {
    if (addForm === false) {
      setContent(x);
    } else {
      setContent(y);
    }
  }, [addForm]);

  return (
    <View style={styles.header}>
      <Header />
      {content}
      <Button
        title="Add new coefficient"
        onPress={() => {
          setAddForm(true);
        }}
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
  level: {
    height: 40,
    width: "50%",
    textAlign: "center",
    fontWeight: "bold",
    justifyContent: "center",
  },
  ltCombo: {
    flexDirection: "row",
  },
  textInput: {
    margin: 1,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "40%",
  },
  flatList: {
    height: "25%",
  },
});
