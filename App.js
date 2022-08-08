import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Linking } from "react-native";
import React, { useState } from "react";
export default function App() {
  const [text, setText] = useState("Mash");
  const [session, setSession] = useState({ number: 6, title: "name" });
  const [current, setCurrent] = useState(true);
  const [counter, setCounter] = useState(0);
  return (
    <View style={styles.body}>
      <View style={styles.container1}>
        <View style={styles.view1}>
          <Text style={styles.text}>1</Text>
        </View>
        <View style={styles.view2}></View>
        <View style={styles.view3}></View>
      </View>
      <View style={styles.container2}>
        <View style={styles.view4}></View>
      </View>
      <View style={styles.container3}>
        <View style={styles.view5}></View>
      </View>
      <View style={styles.container4}>
        <View style={styles.view6}></View>
        <View style={styles.view7}></View>
      </View>
      {/* <View style={styles.view1}>
        <Text style={styles.text}>1</Text>
      </View>
      <View style={styles.view2}>
        <Text style={styles.text}>2</Text>
      </View>
      <View style={styles.view3}>
        <Text style={styles.text}>3</Text>
      </View> */}
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    // width: "100%",
    // height: "50%",
    flex: 1,
    // flexDirection: "row",
    backgroundColor: "#0000ff",
    alignItems: "stretch",
    justifyContent: "center",
    // borderWidth: 10,
    // borderColor: "#ff00ff",
    // borderRadius: 10,
    // margin: 40,
  },
  container1: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "green",
  },
  container2: {
    flex: 1,
    backgroundColor: "red",
  },
  container3: {
    flex: 1,
    backgroundColor: "yellow",
  },
  container4: {
    flex: 6,
    backgroundColor: "blue",
    flexDirection: "row",
  },
  view4: {
    flex: 1,
    backgroundColor: "black",
  },
  view5: {
    flex: 1,
    backgroundColor: "grey",
  },
  view6: {
    flex: 1,
    backgroundColor: "black",
  },
  view7: {
    flex: 1,
    backgroundColor: "pink",
  },
  view1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
  },
  view2: {
    flex: 2,

    backgroundColor: "red",
  },
  view3: {
    flex: 3,

    backgroundColor: "yellow",
  },
  text: {
    color: "red",
    fontSize: 20,
    margin: 10,
    textTransform: "uppercase",
  },
});
