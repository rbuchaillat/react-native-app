/* eslint-disable prettier/prettier */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {DrawerContent} from './DrawerContent';
import {Home} from './Home';
import {PageExample} from './PageExample';

const Drawer = createDrawerNavigator();

export const RootNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={({navigation}) => (
        <DrawerContent navigation={navigation} />
      )}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="PageExample" component={PageExample} />
    </Drawer.Navigator>
  );
};
