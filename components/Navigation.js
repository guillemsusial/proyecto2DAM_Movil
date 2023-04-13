import * as React from "react";

import { StyleSheet } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Item from "../pages/Item";
import Home from "../pages/Home";


const Drawer = createDrawerNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Item" component={Item} />
    </Drawer.Navigator>
  </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
