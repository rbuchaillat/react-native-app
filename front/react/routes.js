/* eslint-disable prettier/prettier */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {DrawerContent} from './components/DrawerContent';
import {HomeScreen} from './components/HomeScreen';
import {LoginScreen} from './components/LoginScreen';

const Drawer = createDrawerNavigator();

export const RootNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={({navigation}) => (
        <DrawerContent navigation={navigation} />
      )}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Login" component={LoginScreen} />
    </Drawer.Navigator>
  );
};
