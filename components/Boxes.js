import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Boxes({children,size}) {
  return (
    <View
      style={[
        styles.container,
        {          
          flex: size,
        },
      ]}
    >
      <View style={styles.inner}>
        {children}
      </View>
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
    width:'100%',
    height:'100%',
    alignItems: "center",
    flexDirection: "column",
    flexWrap: "wrap",
    backgroundColor: "#D3D3D3",
    alignItems: "center",
    justifyContent: "center",
  },
});
