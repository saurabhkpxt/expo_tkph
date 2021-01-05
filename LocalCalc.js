import React, { Component, useState } from "react";
import { Button, Image, StyleSheet, Text, View, StatusBar } from "react-native";
import Header from "./Header";
import * as FileSystem from "expo-file-system";

export default ({ navigation }) => {
  const [data, setData] = useState("Change this text");
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
  return (
    <View style={styles.header}>
      <Header />
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
