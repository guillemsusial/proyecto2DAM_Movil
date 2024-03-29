import React from "react";
import { paleta } from "./Colores";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";


const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1, backgroundColor: paleta.principal1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: paleta.fondo }}
      >
        <ImageBackground source={null} style={{ padding: 20 }}>
          <Image
            source={{
              uri: "https://img.freepik.com/foto-gratis/hombre-guapo-sentado-coche-probarlo_1303-21797.jpg",
            }}
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              marginBottom: 10,
            }}
          />
          <Text
            style={{
              color: "#fff",
              fontSize: 18,

              marginBottom: 5,
            }}
          >
            Manolo
          </Text>
        </ImageBackground>
        <View
          style={{
            flex: 1,

            backgroundColor: paleta.principal1,
            padding: 20,
          }}
        >
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons
              name="share-social-outline"
              size={22}
              color={paleta.text}
            />
            <Text
              style={{
                fontSize: 15,
                color: paleta.text,
                marginLeft: 5,
              }}
            >
              Tell a Friend
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Login")}
          style={{ paddingVertical: 15 }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="exit-outline" size={22} color={paleta.text} />
            <Text
              style={{
                fontSize: 15,
                color: paleta.text,
                marginLeft: 5,
              }}
            >
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
