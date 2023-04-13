import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

const backgroundColor = "#151515";

export default function Boxes({ children, size,bg,br,clr}) {
  return (
    <View
      /*parametro size para personalizar el tamaño */
      style={[
        styles.container,
        {
          flex: size,
          backgroundColor: bg==undefined ? backgroundColor :bg,
          borderRadius : br==undefined ? 0 :br,
          padding:10,
        },
      ]}
    >
      <View style={[styles.inner,{flexDirection:clr==undefined ? 'row' :clr}]} >{children}</View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  inner: {
    width: "100%",
    height: "100%",
    //alignItems: "center",
   // flexDirection: "row",
   // backgroundColor: backgroundColor,
    justifyContent: "center",
  },
});
