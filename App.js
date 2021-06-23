import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import dummyData from "./Components/dummyData";
import UserList from "./Components/UserList";

export default function App() {
  return (
    <View style={styles.container}>
      <UserList />
      <StatusBar style="auto" />
      <Button title="button" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
