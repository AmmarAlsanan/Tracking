import React, { useEffect, useContext } from "react";
import { Context as AuthContext } from "../components/Context/authContext";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

const autoLogIn = () => {
  const { state, autologin } = useContext(AuthContext);
  console.log(state.token);

  useEffect(() => {
    autologin();
  }, []);
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});
export default autoLogIn;
