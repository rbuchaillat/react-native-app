/* eslint-disable prettier/prettier */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {DrawerContent} from './components/DrawerContent';
import {HomeScreen} from './components/HomeScreen';
import {LoginScreen} from './components/LoginScreen';
import {RegisterScreen} from './components/RegisterScreen';

const Drawer = createDrawerNavigator();

export const Routes = () => {
  return (
    <Drawer.Navigator
      drawerContent={({navigation}) => (
        <DrawerContent navigation={navigation} />
      )}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Login" component={LoginScreen} />
      <Drawer.Screen name="Register" component={RegisterScreen} />
    </Drawer.Navigator>
  );
};
