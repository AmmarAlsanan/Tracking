import React, { useContext } from "react";
import { Context as AuthContext } from "../components/Context/authContext";

import { View, Text, StyleSheet, Button } from "react-native";

const accountScreen = () => {
  const { state, signOut } = useContext(AuthContext);
  return (
    <View style={styles.conti}>
      <Text>{state.token}</Text>
      <Button style={styles.button} title="log Out" onPress={() => signOut()} />
    </View>
  );
};

const styles = StyleSheet.create({
  conti: { flex: 1, justifyContent: "center" },
  button: { marginTop: 30, width: 300, borderRadius: 5 },
});
export default accountScreen;
