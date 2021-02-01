import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../components/context/authContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink'

const SinginScreen = ({ navigation }) => {
  const { state, signin } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign In"
        errorMessage={state.errorMessage}
        onSubmit={signin}
        submitButtonText="Sign In"
      />
      <NavLink 
      routeName="Signup"
      text="Don't have an account? Sign Up instead"
      />
          </View>
  );
};

SinginScreen.navigationOptions = () => {
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

export default SinginScreen;
