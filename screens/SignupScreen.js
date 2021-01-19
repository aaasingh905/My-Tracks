
import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const SignupScreen = ({navigation}) => {
    return (
        <View>
            <Text style={{fontSize:48}}>SignUp Screen</Text>
            <Button title="Go to SignIn" onPress={()=> navigation.navigate('Signin')}/>
            <Button title="Go to Main Flow" onPress={()=> navigation.navigate('mainFlow')}/>
        </View>
    )
}

const styles = StyleSheet.create({})
export default SignupScreen
