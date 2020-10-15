import React, { useState, useContext } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import Spacer from "./Spacer";
import { withNavigation, NavigationEvents } from "react-navigation";
import { Context as AuthContext } from "../context/AuthContext";
import { SafeAreaView } from "react-navigation";

const SignForm = ({
  onSubmit,
  title,
  navigation,
  link,
  errorMessage,
  otherTitle,
}) => {
  const { clearErrorMessage } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <SafeAreaView forceInset={{ top: "always" }} style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <Spacer>
        <Text h3>{title} to Tracker</Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCorrect={false}
        autoCapitalize="none"
      />
      <Input
        value={password}
        onChangeText={setPassword}
        label="Password"
        autoCorrect={false}
        autoCapitalize="none"
        secureTextEntry
      />

      {errorMessage ? (
        <Spacer>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        </Spacer>
      ) : null}

      <Spacer>
        <Button title={title} onPress={() => onSubmit({ email, password })} />
      </Spacer>
      <TouchableOpacity onPress={() => navigation.navigate(link)}>
        <Spacer>
          <Text style={styles.link}>
            {otherTitle} instead of {title}
          </Text>
        </Spacer>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default withNavigation(SignForm);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200,
  },
  errorMessage: {
    color: "red",
  },
  link: {
    color: "blue",
  },
});
