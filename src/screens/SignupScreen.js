import React, { useContext } from "react";
import { Context as AuthContext } from "../context/AuthContext";
import SignForm from "../components/Auth";
const SignupScreen = () => {
  const { state, signup } = useContext(AuthContext);

  return (
    <SignForm
      onSubmit={signup}
      link="Signin"
      title="Sign Up"
      otherTitle="Sign In"
      errorMessage={state.errorMessage}
    />
  );
};

export default SignupScreen;
SignupScreen.navigationOptions = () => {
  return { header: () => false };
};
