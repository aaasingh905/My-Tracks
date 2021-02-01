import React, { useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../components/context/authContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink'

const SignupScreen = ({ navigation }) => {
  const { state, signup, localSignin} = useContext(AuthContext);


 
  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign Up"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={signup}
      />
      <NavLink 
      routeName="Signin"
      text="Already have an account? Sign In instead"
      />
          </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
  },
  
});

export default SignupScreen;
