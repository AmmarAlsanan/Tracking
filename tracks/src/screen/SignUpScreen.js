import React, { useContext, useEffect } from "react";
import { Context as AuthContext } from "../components/Context/authContext";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import { Text } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

import SignUp from "../components/SignUpform";
const signUpScreen = () => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  //navigation
  const navigation = useNavigation();

  //useeffect to clear the errors
  useEffect(() => {
    const errorCleaner = navigation.addListener(
      "blur",
      () => clearErrorMessage
    );
    return errorCleaner;
  }, [navigation]);
  return (
    <View style={styles.form}>
      <Text
        h3
        style={{
          marginBottom: 60,
          color: "#cc5333",
        }}
      >
        Sign Up for Tracking
      </Text>
      <SignUp
        errorMessage={state.errorMessage}
        onClick={signup}
        buttontext="Sing Up"
      />
      <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <Text style={styles.login}>Already have account ?SignIn</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    marginTop: 300,
    alignItems: "center",
    padding: 13,
    flex: 1,
    marginBottom: 300,
    justifyContent: "center",
  },
  login: {
    margin: 13,
    flexDirection: "row",
    color: "blue",
    fontSize: 15,
  },
});
export default signUpScreen;
