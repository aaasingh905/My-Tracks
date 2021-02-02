import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import {Context as AuthContext} from '../components/context/authContext'
import Spacer from '../components/Spacer'
const AccountScreen = () => {
    const {signout} = useContext(AuthContext)
    return (
        <View>
            <Text style={{fontSize:48}}>Account Screen</Text>
            <Spacer>
            <Button title="Sign Out" onPress ={ signout} />
        </Spacer>
        </View>
        
    )
}

const styles = StyleSheet.create({})
export default AccountScreen
