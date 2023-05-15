import * as React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { colors, paleta } from "./Colores";

import Ionicons from "@expo/vector-icons/Ionicons";
import CustomDrawer from "./CustomDrawer";

import Login from "../pages/Login";
import Account from "../pages/Account";
import Home from "../pages/Home";
import Item from "../pages/Item";
import Profile from "../pages/Profile";

//exp://192.168.1.149:19000

const Drawer = createDrawerNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        useLegacyImplementation={true}
        screenOptions={{
          drawerLabelStyle: {
            fontSize: 24,
            fontFamily: "Roboto",
          },

          drawerActiveTintColor: paleta.text,
          drawerInactiveTintColor: paleta.text,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: paleta.fondo,
          },
          headerTintColor: paleta.principal1,
          headerTitleStyle: {
            fontSize: 30,
            fontWeight: "bold",
            fontFamily: "Roboto",
          },
        }}
      >
        <Drawer.Screen
          name={"Login"}
          component={Login}
          options={{
            headerShown: false,
            drawerLabel: () => null,
            title: undefined,
            drawerItemStyle: { display: "none" },
          }}

          //drawerIcon: () => null,
        />
        <Drawer.Screen
          name={"Account"}
          component={Account}
          options={({ navigation, route }) => ({
            headerTitle: "",
            headerLeft: () => (
              <Ionicons
                name="chevron-back-outline"
                size={32}
                color={paleta.variante1}
                onPress={() => navigation.goBack()}
              />
            ),
            drawerIcon: ({ color }) => (
              <Ionicons name="person-circle" size={32} color={paleta.text} />
            ),
            drawerLabel: () => null,
            title: undefined,
            drawerItemStyle: { display: "none" },
          })}
        />
        <Drawer.Screen
          name={"Profile"}
          component={Profile}
          options={({ navigation, route }) => ({
            headerTitle: "User Profile",
            headerLeft: () => (
              <Ionicons
                name="chevron-back-outline"
                size={32}
                color={paleta.variante1}
                onPress={() => navigation.navigate("Home")}
              />
            ),
            drawerIcon: ({ color }) => (
              <Ionicons name="person-circle" size={32} color={paleta.text} />
            ),
          })}
        />
        <Drawer.Screen
          name={"Home"}
          component={Home}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="home" size={32} color={paleta.text} />
            ),
          }}
        />
        <Drawer.Screen
          name={"Item"}
          component={Item}
          options={({ navigation, route }) => ({
            headerLeft: () => (
              <Ionicons
                name="chevron-back-outline"
                size={32}
                color={paleta.variante1}
                onPress={() => navigation.navigate("Home")}
              />
            ),
            unmountOnBlur: true,
            headerTitle: "Item",
            drawerLabel: () => null,
            title: undefined,
            drawerItemStyle: { display: "none" },
          })}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
