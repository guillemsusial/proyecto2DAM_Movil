import React from "react";
import { colors, paleta } from "./Colores";
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
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { color } from "react-native-reanimated";



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
              uri: "https://www.pngarts.com/files/11/Avatar-PNG-Free-Download.png",
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
            John Doe
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
