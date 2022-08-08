import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Linking } from "react-native";
import React, { useState } from "react";
export default function App() {
  const [text, setText] = useState("Mash");
  const [session, setSession] = useState({ number: 6, title: "name" });
  const [current, setCurrent] = useState(true);
  const [counter, setCounter] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {text} {session.title} {current ? "cur" : "prev"} {counter}
      </Text>
      <View style={styles.button}>
        <Button
          title="Yotubue channel"
          onPress={() => {
            // Linking.openURL("https://youtube.com");
            setText("hji");
            setSession({ ...session, title: "newname" });
            setCurrent((prev) => !prev);
            setCounter((prev) => prev + 5);
          }}
        ></Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "50%",
    // flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 10,
    borderColor: "#ff00ff",
    borderRadius: 10,
    // margin: 40,
  },
  text: {
    color: "red",
    fontSize: 20,
    margin: 10,
    textTransform: "uppercase",
  },
  button: {
    width: 100,
  },
});
