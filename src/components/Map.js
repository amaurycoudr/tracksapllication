import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Polyline } from "react-native-maps";
import { requestPermissionsAsync } from "expo-location";
const Map = () => {

  let points = [];
  for (let i = 0; i < 20; i++) {
    points.push({
      longitude: 4.6992946 + Math.random() * 0.001 * i,
      latitude: 46.8 + Math.random() * 0.001 * i,
    });
  }
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        longitude: 4.6992946,
        latitude: 46.8,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
      }}
    >
      <Polyline coordinates={points} />
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({ map: { height: 300 } });
