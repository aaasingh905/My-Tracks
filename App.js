import React from "react";
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AccountScreen from "./screens/AccountScreen";
import SigninScreen from "./screens/SigninScreen";
import SignupScreen from "./screens/SignupScreen";
import TrackDetailScreen from "./screens/TrackDetailScreen";
import TrackListScreen from "./screens/TracksListScreen";
import TrackCreateScreen from "./screens/TrackCreateScreen";
import StartupScreen from "./screens/StartupScreen";
import { Provider as AuthProvider} from './components/context/authContext'
import { Provider as LocationProvider} from './components/context/LocationContext'
import {setNavigator} from './navigationRef'


const switchNavigator = createSwitchNavigator({
  MainScreen:StartupScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen,
    }),
    mainFlow: createBottomTabNavigator({
      trackListFlow:createStackNavigator({
        TrackList: TrackListScreen,
        TrackDetail: TrackDetailScreen,
      }),
      TrackCreate: TrackCreateScreen,
      Account: AccountScreen,
    }),
    
},{
  initialRouteName: 'MainScreen',
})

const AppContainer = createAppContainer(switchNavigator)
export default class App extends React.Component {
  render() {
    return (
      <LocationProvider><AuthProvider><AppContainer ref={(navigator) => {setNavigator(navigator)}}/></AuthProvider></LocationProvider>
    )
  }
}

