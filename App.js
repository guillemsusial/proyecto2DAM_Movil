import * as React from "react";

import { StyleSheet } from "react-native";
// import { createDrawerNavigator } from '@react-navigation/drawer';


import Navigation from "./components/Navigation";

// const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Navigation/>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
