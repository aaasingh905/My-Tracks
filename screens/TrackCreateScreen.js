import React from 'react'
import { StyleSheet } from 'react-native'
import {  Text } from "react-native-elements";
import { SafeAreaView } from 'react-navigation' 
import Map from '../components/Map'

const TrackCreateScreen = () => {
    return (
        <>
            <Text style={{fontSize:48}}>Create A Track</Text>
            <Map />
        </>
    )
}

const styles = StyleSheet.create({})
export default TrackCreateScreen
