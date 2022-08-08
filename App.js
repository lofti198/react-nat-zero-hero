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
      <View style={styles.view1}>
        <Text style={styles.text}>1</Text>
      </View>
      <View style={styles.view2}>
        <Text style={styles.text}>2</Text>
      </View>
      <View style={styles.view3}>
        <Text style={styles.text}>3</Text>
      </View>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    // width: "100%",
    // height: "50%",
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#0000ff",
    alignItems: "stretch",
    justifyContent: "center",
    // borderWidth: 10,
    // borderColor: "#ff00ff",
    // borderRadius: 10,
    // margin: 40,
  },
  view1: {
    flex: 3,
    // width: 100,
    // height: 100,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  view2: {
    flex: 1,
    // width: 100,
    // height: 100,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  view3: {
    flex: 1,
    // width: 100,
    // height: 100,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "red",
    fontSize: 20,
    margin: 10,
    textTransform: "uppercase",
  },
});
