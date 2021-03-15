import React, { useContext } from "react";
import { StyleSheet, SafeAreaView, ActivityIndicator } from "react-native";
import { Text } from "react-native-elements";
import MapView, { Polygon, Circle } from "react-native-maps";
import { Context as LocationContext } from "./Context/LocationContext";

const Map = () => {
  const {
    state: { currentLocation },
  } = useContext(LocationContext);

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }
  return (
    <SafeAreaView>
      <MapView
        style={{ height: 300 }}
        initialRegion={{
          ...currentLocation.coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        region={{
          ...currentLocation.coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      />
      <Circle
        center={currentLocation.coords}
        radius={300}
        strokeColor="rgba(158,158,255,1.0)"
        fillColor="rgba(158,158,255,1)"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Map;
