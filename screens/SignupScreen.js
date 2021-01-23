import React, { useState, useContext} from "react";
import { View, TouchableOpacity,StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/spacer";
import {Context as AuthContext} from '../components/context/authContext'

const SignupScreen = ({ navigation }) => {
  const {state, signup} = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  return (
    <View style={styles.container}>
     
      <TouchableOpacity onPress={() => navigation.navigate("Signin")}><Text>Already Have an account?</Text></TouchableOpacity>
    </View>
  );
};

SignupScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
  };

const styles = StyleSheet.create({
  container: {
      flex:1,
      justifyContent:"center",
      alignItems:'center',
      marginBottom:'40%'
  },
  errorMessage: {
    fontSize:16,
    color:'red'
  }
});
export default SignupScreen;
