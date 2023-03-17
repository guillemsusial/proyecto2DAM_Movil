import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

const backgroundColor = "#151515";

export default function Boxes({ children, size }) {
  return (
    <View
      /*parametro size para personalizar el tamaño */
      style={[
        styles.container,
        {
          flex: size,
        },
      ]}
    >
      <View style={styles.inner}>{children}</View>
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
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: backgroundColor,
    justifyContent: "center",
  },
});
