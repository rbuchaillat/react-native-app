/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ActivityIndicator} from 'react-native-paper';
import {View, StyleSheet} from 'react-native';

import {HomeScreen} from './components/HomeScreen';
import {LoginScreen} from './components/LoginScreen';
import {RegisterScreen} from './components/RegisterScreen';
import {ListOfferScreen} from './components/offer/ListOfferScreen';
import {CreateOfferScreen} from './components/offer/CreateOfferScreen';
import {ShowOfferScreen} from './components/offer/ShowOfferScreen';
import {getSessionStorage} from './context/session';

const Stack = createStackNavigator();

export const Routes = () => {
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const setData = async () => {
      setLoading(true);
      const sessionContext = await getSessionStorage();
      setAuth(sessionContext.auth);
      setLoading(false);
    };
    setData();
  }, []);

  return loading ? (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  ) : (
    <>
      <Stack.Navigator
        initialRouteName={auth ? 'ListOffer' : 'Home'}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="ListOffer" component={ListOfferScreen} />
        <Stack.Screen name="CreateOffer" component={CreateOfferScreen} />
        <Stack.Screen name="ShowOffer" component={ShowOfferScreen} />
      </Stack.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
