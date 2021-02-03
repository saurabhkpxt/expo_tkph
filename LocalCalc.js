import React, { Component, useState } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  TextInput,
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
  console.log(data_sample);

  const changeText = async () => {
    jsonData = { data: "Text has been changed" };

    fileUri = `${FileSystem.documentDirectory}/jsondetails.txt`;
    isdDataExist = await FileSystem.getInfoAsync(fileUri);
    if (isdDataExist.exists) {
      FileSystem.readAsStringAsync(fileUri)
        .then((text) => {
          console.log("Finished downloading to ", text);
          var obj = JSON.parse(text);
          obj.push(jsonData);
          var myJSON = JSON.stringify(obj);
          setData(myJSON);
          FileSystem.writeAsStringAsync(fileUri, myJSON);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      obj = [];
      obj.push(jsonData);
      var myJSON = JSON.stringify(obj);
      setData(myJSON);
      FileSystem.writeAsStringAsync(fileUri, myJSON);
    }
  };

  const changeSqlText = () => {
    //let fileUri = `${FileSystem.documentDirectory}db123.db`;
    console.log(fileUri);
    let fileUri = "/sqlite.db";
    //let fileUri = "/db123.db";

    const db = SQLite.openDatabase(fileUri);
    //const db = SQLite.openDatabase("db.db");

    db.transaction(
      (tx) => {
        tx.executeSql("select * from items", [], (_, { rows }) => {
          console.log(JSON.stringify(rows));
          setData(JSON.stringify(rows));
        });
      },
      null,
      forceUpdate
    );
  };
  const [text, setText] = React.useState(null);

  const addSqlDb = (text) => {
    //let fileUri = `${FileSystem.documentDirectory}db123.db`;
    console.log(fileUri);
    let fileUri = "/sqlite.db";
    //let fileUri = "/db123.db";

    const db = SQLite.openDatabase(fileUri);
    //const db = SQLite.openDatabase("db.db");
    if (text === null || text === "") {
      return false;
    }

    db.transaction(
      (tx) => {
        tx.executeSql(
          "create table if not exists items (id integer primary key not null, done int, value text);"
        );
        tx.executeSql("insert into items (done, value) values (0, ?)", [text]);
        tx.executeSql("select * from items", [], (_, { rows }) =>
          console.log(JSON.stringify(rows))
        );
      },
      null,
      forceUpdate
    );
  };

  const add = (text) => {
    const db = SQLite.openDatabase("db.db");
    // is text empty?
    if (text === null || text === "") {
      return false;
    }

    db.transaction(
      (tx) => {
        tx.executeSql("insert into items (done, value) values (0, ?)", [text]);
        tx.executeSql("select * from items", [], (_, { rows }) =>
          console.log(JSON.stringify(rows))
        );
      },
      null,
      forceUpdate
    );
  };
  return (
    <View style={styles.header}>
      <Header />
      <Text>{data}</Text>
      <Button title="Add SQL DB" onPress={() => addSqlDb("Hello3")} />
      <TextInput
        onChangeText={(text) => setText(text)}
        onSubmitEditing={() => {
          add("Hello1");
          setText(null);
        }}
        placeholder="what do you need to do?"
        style={styles.input}
        value={text}
      />
      <Button title="Change SQL Text" onPress={changeSqlText} />

      <ScrollView>
        <TkphCard navigation={navigation} data_sample={data_sample} />
      </ScrollView>
      <Text>Local Calculations</Text>
      <Text>{data}</Text>
      <Text></Text>
      <Button title="Change Text" onPress={changeText} />
      <Button
        title="Local Storage"
        onPress={() => navigation.navigate("Home")}
      />
      <Button
        title="Cloud Storage"
        onPress={() => navigation.navigate("Home")}
      />
      <Button
        title="Add new calculation"
        onPress={() => navigation.navigate("NewCalc")}
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
