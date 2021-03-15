import "../_mockLocation";
import React, { useContext } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { withNavigation } from "react-navigation";
import { Text } from "react-native-elements";
import Map from "../components/Map";
import { Context as LocationContext } from "../components/Context/LocationContext";
import useLocation from "../hooks/useLocation";

const createTrackScreen = ({ isFocused }) => {
  const { addLocation } = useContext(LocationContext);
  const [err] = useLocation(isFocused, addLocation);
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text>creat Track Screen</Text>
      <Map />
      {err ? <Text>Please grant us location access</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
export default withNavigation(createTrackScreen);
