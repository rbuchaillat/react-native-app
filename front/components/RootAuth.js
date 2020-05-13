import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';

import Login from './Login';
import Register from './Register';

const RootStack = createStackNavigator();

const RootAuth = ([navigation]) => {
    return (
        <RootStack.Navigator headerMode='none'>
            <RootStack.Screen name="Login" component={Login}></RootStack.Screen>
            <RootStack.Screen name="Register" component={Register}></RootStack.Screen>
        </RootStack.Navigator>
    )
}

export default RootAuth;

const styles = StyleSheet.create({})
