import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';

import Login from './Login';
import Register from './Register';
import SplashScreen from './SplashScreen';

const RootStack = createStackNavigator();

const Route = ({ navigation }) => {
  return (
    <RootStack.Navigator headerMode='none'>
      <RootStack.Screen name="SplashScreen" component={SplashScreen}></RootStack.Screen>
      <RootStack.Screen name="Login" component={Login}></RootStack.Screen>
      <RootStack.Screen name="Register" component={Register}></RootStack.Screen>
    </RootStack.Navigator>
  )
}

export default Route;