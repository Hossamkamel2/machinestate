import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import State from "./components/state";

export default function App() {
  return <State></State>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",

    // alignItems: "center",
    // justifyContent: "center",
  },
});
