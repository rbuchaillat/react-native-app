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
import {InvitationOfferScreen} from './components/offer/InvitationOfferScreen';
import {ApplicationOfferScreen} from './components/offer/ApplicationOfferScreen';
import {getSessionStorage} from './context/session';

const Stack = createStackNavigator();

export const Routes = () => {
  const jwt_decode = require('jwt-decode');
  const [auth, setAuth] = useState(false);
  const [role, setRole] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const setData = async () => {
      setLoading(true);
      const sessionContext = await getSessionStorage();
      if (sessionContext.token) {
        setRole(jwt_decode(sessionContext.token).roles[0]);
      }
      setAuth(sessionContext.auth);
      setLoading(false);
    };
    setData();
  }, [jwt_decode]);

  return loading ? (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  ) : (
    <Stack.Navigator
      initialRouteName={auth ? 'ListOffer' : 'Home'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="ListOffer">
        {(props) => <ListOfferScreen {...props} extraData={role} />}
      </Stack.Screen>
      {role === 'recruiter' ? (
        <>
          <Stack.Screen name="CreateOffer" component={CreateOfferScreen} />
          <Stack.Screen name="ShowOffer" component={ShowOfferScreen} />
          <Stack.Screen
            name="InvitationOffer"
            component={InvitationOfferScreen}
          />
        </>
      ) : (
        <Stack.Screen
          name="ApplicationOffer"
          component={ApplicationOfferScreen}
        />
      )}
    </Stack.Navigator>
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
