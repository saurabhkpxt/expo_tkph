import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
} from "react-native";

function NewCalc() {
  const [mineDetails, setMineDetails] = useState("Enter mine details");
  const [tyreSize, setTyreSize] = useState("Enter Tyre Size");
  const [maxAmbTemp, setMaxAmbTemp] = useState("Enter Max Amb. Temp.");
  return (
    <View style={styles.home}>
      <Text style={styles.text}>TKPH Calculations </Text>
      <ScrollView>
        <View style={styles.outerBox}>
          <Text style={styles.boxHeader}>Mine & Tyre Details </Text>
          <View style={styles.ltCombo}>
            <Text style={styles.level}>Mine Name & Address</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => setMineDetails(text)}
              placeholder="Enter Mine Details"
            />
          </View>
          <View style={styles.ltCombo}>
            <Text style={styles.level}>Tyre Size</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => setTyreSize(text)}
              placeholder="Enter Tyre Size"
            />
          </View>
          <View style={styles.ltCombo}>
            <Text style={styles.level}>Max Ambient Temp</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => setMaxAmbTemp(text)}
              placeholder="Enter Max Amb. Temp."
            />
          </View>
        </View>
        <View style={styles.outerBox}>
          <Text style={styles.boxHeader}>Cycle Details </Text>
          <View style={styles.ltCombo}>
            <Text style={styles.level}>Cycle Length</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => setMineDetails(text)}
              placeholder="Enter Cycle Length"
            />
          </View>
          <View style={styles.ltCombo}>
            <Text style={styles.level}>Duration of Cycle</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => setTyreSize(text)}
              placeholder="Enter Tyre Size"
            />
          </View>
        </View>
        <View style={styles.outerBox}>
          <Text style={styles.boxHeader}>Vehicle Details </Text>
          <View style={styles.ltCombo}>
            <Text style={styles.level}>Vehicle Make</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => setMineDetails(text)}
              placeholder="Enter Vehicle Make"
            />
          </View>
          <View style={styles.ltCombo}>
            <Text style={styles.level}>Vehicle Model</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => setTyreSize(text)}
              placeholder="Enter Vehicle Model"
            />
          </View>
          <View style={styles.ltCombo}>
            <Text style={styles.level}>Empty Vehicle Weight (EVW)</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => setMaxAmbTemp(text)}
              placeholder="Enter EVW"
            />
          </View>
          <View style={styles.ltCombo}>
            <Text style={styles.level}>Pay Load</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => setMaxAmbTemp(text)}
              placeholder="Pay Load"
            />
          </View>
          <View style={styles.ltCombo}>
            <Text style={styles.level}>Weight Correction</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => setMaxAmbTemp(text)}
              placeholder="Weight Correction"
            />
          </View>
        </View>
        <View style={styles.outerBox}>
          <Text style={styles.boxHeader}>Load Distribution</Text>
          <View style={styles.ltCombo}>
            <Text style={styles.level}>Load Dist. (Front Unloaded)</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => setMineDetails(text)}
              placeholder="Enter %"
            />
          </View>
          <View style={styles.ltCombo}>
            <Text style={styles.level}>Load Dist. (Rear Unloaded)</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => setTyreSize(text)}
              placeholder="Enter %"
            />
          </View>
          <View style={styles.ltCombo}>
            <Text style={styles.level}>Load Dist. (Front Loaded)</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => setMaxAmbTemp(text)}
              placeholder="Enter %"
            />
          </View>
          <View style={styles.ltCombo}>
            <Text style={styles.level}>Load Dist. (Rear Loaded)</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => setMaxAmbTemp(text)}
              placeholder="Enter %"
            />
          </View>
        </View>
        <Button onPress={() => {}} title="Submit" />
      </ScrollView>
    </View>
  );
}

export default NewCalc;

const styles = StyleSheet.create({
  home: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    margin: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  boxHeader: {
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 15,
    textDecorationLine: "underline",
  },
  textInput: {
    margin: 1,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "60%",
  },
  level: {
    height: 40,
    width: "40%",
    textAlign: "left",
    fontWeight: "bold",
    justifyContent: "center",
  },
  ltCombo: {
    flexDirection: "row",
  },
  outerBox: {
    padding: 5,
    paddingTop: 0,
    marginHorizontal: "auto",
    width: "100%",
    maxWidth: 500,
    borderColor: "gray",
    borderWidth: 1,
  },
});
