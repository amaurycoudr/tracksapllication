import React, { useContext } from "react";
import { Context as AuthContext } from "../context/AuthContext";
import SignForm from "../components/Auth";
const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);
  return (
    <SignForm
      onSubmit={(email, password) => {
        signin(email, password);
      }}
      errorMessage={state.errorMessage}
      link="Signup"
      title="Sign In"
      otherTitle="Sign Up"
    />
  );
};

SigninScreen.navigationOptions = () => {
  return { header: () => false };
};

export default SigninScreen;
