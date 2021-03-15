import React from "react";
import { View, StyleSheet } from "react-native";

const spacer = ({ Chil }) => {
  return <View style={styles.view}>{Chil}</View>;
};
const styles = StyleSheet.create({
  view: {
    margin: 15,
  },
});

export default spacer;
