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

import TracksScreen from "./screens/TracksListScreen";
/* import ShowBlogScreen from "./screens/ShowBlog";
import EditBlogScreen from "./screens/EditBlog";
import CreateBlogScreen from "./screens/CreateBlog" */

const switchNavigator = createSwitchNavigator({
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
    })
})

const AppContainer = createAppContainer(switchNavigator)
export default class App extends React.Component {
  render() {
    return (
        <AppContainer />
    );
  }
}

/* 
  const AppNavigator = createStackNavigator(
  {
    Tracks: TracksScreen,
      },

  {
    initialRouteName: "Tracks",

    defaultNavigationOptions: {
      title: "My Tracks",
      headerStyle: {
        backgroundColor: "#18d67a",
      },
    },
  }
);

const AppContainer = createAppContainer(AppNavigator);


 */