import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Linking,
  ScrollView,
  RefreshControl,
  FlatList,
  SectionList,
  TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";

export default function App() {
  const [name, setName] = useState("");
  // const renderItem = ({ item }) => {
  //   return (
  //     <View style={styles.item}>
  //       <Text style={styles.text}>{item.item}</Text>
  //     </View>
  //   );
  // };

  // const [items, setItems] = useState([]);
  // const [DATA, setDATA] = useState([
  //   {
  //     title: "t1",
  //     data: ["item 1-1", "item 1-2"],
  //   },
  //   {
  //     title: "t2",
  //     data: ["item 2-1", "item 2-2"],
  //   },
  // ]);
  // const [refreshing, setRefreshing] = useState(false);
  // useEffect(() => {
  //   let ar = [];
  //   for (let index = 0; index < 25; index++) {
  //     ar.push({ key: index.toString(), item: "item" + index });
  //   }
  //   setItems(ar);
  // }, []);
  // const [items, setItems] = useState(() => {});
  // const [session, setSession] = useState({ number: 6, title: "name" });
  // const [current, setCurrent] = useState(true);
  // const [counter, setCounter] = useState(0);
  return (
    <View style={styles.body}>
      <TextInput
        style={styles.input}
        placeholder="e.g"
        keyboardType="numeric"
        maxLength={4}
        onChangeText={(value) => {
          setName(value);
        }}
      />
      <Text>{name}</Text>
      {
        // <SectionList
        //   keyExtractor={(item, index) => index}
        //   sections={DATA}
        //   renderItem={({ item }) => <Text style={styles.text}>{item}</Text>}
        //   renderSectionHeader={({ section }) => (
        //     <View style={styles.item}>
        //       <Text style={styles.text}>{section.title}</Text>
        //     </View>
        //   )}
        //   refreshControl={
        //     <RefreshControl
        //       refreshing={refreshing}
        //       onRefresh={() => {
        //         console.log("hello");
        //         setRefreshing(true);
        //         setDATA((prev) => {
        //           const nextIndex = prev.length + 1;
        //           return [
        //             ...prev,
        //             {
        //               title: `${nextIndex}t`,
        //               data: [`item ${nextIndex}-1`, `item ${nextIndex}-2`],
        //             },
        //           ];
        //         });
        //         // setItems([...items, { key: 253, item: "item" + 253 }]);
        //         setRefreshing(false);
        //       }}
        //       colors={["#ff00ff"]}
        //     />
        //   }
        // />
        // <FlatList
        //   inverted
        //   // numColumns={2}
        //   data={items}
        //   renderItem={renderItem}
        //   keyExtractor={(item, index) => index.toString()}
        //   refreshControl={
        //     <RefreshControl
        //       refreshing={refreshing}
        //       onRefresh={() => {
        //         console.log("hello");
        //         setRefreshing(true);
        //         setItems([...items, { key: 253, item: "item" + 253 }]);
        //         setRefreshing(false);
        //       }}
        //       colors={["#ff00ff"]}
        //     />
        //   }
        // />
      }
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
  input: { borderWidth: 1 },
  item: {
    margin: 5,
    backgroundColor: "green",
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
