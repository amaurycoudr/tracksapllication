import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const TrackListScreen = ({ navigation }) => {
  return (
    <View>
      <Text>TrackListScreen</Text>
      <Button
        title="go to detail Screen"
        onPress={() => navigation.navigate("TrackDetail")}
      />
    </View>
  );
};

export default TrackListScreen;

const styles = StyleSheet.create({});
