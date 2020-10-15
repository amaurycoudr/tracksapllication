import React from "react";
import { StyleSheet, View } from "react-native";

const Spacer = ({ children }) => {
  return <View style={styles.margin}>{children}</View>;
};

export default Spacer;

const styles = StyleSheet.create({
  margin: {
    margin: 15,
  },
});
