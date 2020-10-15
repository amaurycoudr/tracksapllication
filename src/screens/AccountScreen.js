import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import Spacer from "../components/Spacer";
import { Button, Text } from "react-native-elements";
import { Context as AuthContext } from "../context/AuthContext";
import { SafeAreaView } from "react-native-safe-area-context";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <SafeAreaView forceInset={{ top: "always" }} style={styles.container}>
      <Spacer>
        <Text h3>Sign Out of Tracker</Text>
      </Spacer>
      <Spacer>
        <Button title="Sign Out" onPress={signout} />
      </Spacer>
    </SafeAreaView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({});
