import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Speace from "./style/Speacer";

const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  return (
    <>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCorrect={false}
        autoCapitalize="none"
      />
      <Speace />
      <Input
        label="Password"
        secureTextEntry
        value={password}
        onChangeText={setpassword}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {props.errorMessage ? (
        <Text style={styles.errorText}>{props.errorMessage}</Text>
      ) : null}

      <Button
        style={styles.button}
        title={props.buttontext}
        onPress={() => props.onClick({ email, password })}
      />
    </>
  );
};
const styles = StyleSheet.create({
  button: { marginTop: 30, width: 300, borderRadius: 5 },
  errorText: { color: "red", fontSize: 13, marginLeft: 13 },
});
export default Signup;
