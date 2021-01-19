import React from "react";
import { View, TouchableOpacity,StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/spacer";

const SignupScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up</Text>
      </Spacer>
      <Input label="Email" />
      <Spacer />
      <Input label="Password" />
      <Spacer>
        <Button title="Sign Up" onPress={() => navigation.navigate("Signin")} />
      </Spacer>
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
});
export default SignupScreen;
