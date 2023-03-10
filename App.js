import * as React from "react";
import Home from "./pages/Home";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import { Card } from "./components/cards";
export default function App() {
  return (
    <View style={[styles.container, { flexDirection: "column" }]}>
      <Card />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
