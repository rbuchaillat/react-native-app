/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

import {DrawerContent} from './components/DrawerContent';
import {HomeScreen} from './components/HomeScreen';
import {LoginScreen} from './components/LoginScreen';
import {RegisterScreen} from './components/RegisterScreen';
import {ListOfferScreen} from './components/offer/ListOfferScreen';
import {CreateOfferScreen} from './components/offer/CreateOfferScreen';
import {getSessionStorage} from './context/session';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export const Routes = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const setData = async () => {
      const sessionContext = await getSessionStorage();
      setAuth(sessionContext.auth);
    };
    setData();
  }, []);

  return auth ? (
    <Drawer.Navigator
      drawerContent={({navigation}) => (
        <DrawerContent navigation={navigation} />
      )}>
      <Drawer.Screen name="ListOffer" component={ListOfferScreen} />
      <Drawer.Screen name="CreateOffer" component={CreateOfferScreen} />
    </Drawer.Navigator>
  ) : (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};
