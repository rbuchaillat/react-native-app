/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ActivityIndicator} from 'react-native-paper';
import {View, StyleSheet} from 'react-native';

import {HomeScreen} from './components/HomeScreen';
import {LoginScreen} from './components/LoginScreen';
import {RegisterScreen} from './components/RegisterScreen';
import {ListOfferRecruiterScreen} from './components/offer/ListOfferRecruiterScreen';
import {ListOfferCandidateScreen} from './components/offer/ListOfferCandidateScreen';
import {CreateOfferScreen} from './components/offer/CreateOfferScreen';
import {ShowOfferScreen} from './components/offer/ShowOfferScreen';
import {InvitationOfferScreen} from './components/offer/InvitationOfferScreen';
import {ApplicationOfferScreen} from './components/offer/ApplicationOfferScreen';
import {getSessionStorage, getUserStorage} from './context/session';

const Stack = createStackNavigator();

export const Routes = () => {
  const [loading, setLoading] = useState(true);
  const [initialRouteName, setInitialRouteName] = useState(false);

  useEffect(() => {
    const setData = async () => {
      setLoading(true);
      const sessionContext = await getSessionStorage();
      const userContext = await getUserStorage();

      if (sessionContext.auth) {
        if (userContext.roles[0] === 'recruiter') {
          setInitialRouteName('ListOfferRecruiter');
        } else {
          setInitialRouteName('ListOfferCandidate');
        }
      } else {
        setInitialRouteName('Home');
      }

      setLoading(false);
    };
    setData();
  }, []);

  return loading && !initialRouteName ? (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  ) : (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen
        name="ListOfferRecruiter"
        component={ListOfferRecruiterScreen}
      />
      <Stack.Screen
        name="ListOfferCandidate"
        component={ListOfferCandidateScreen}
      />
      <Stack.Screen name="ShowOffer" component={ShowOfferScreen} />
      <Stack.Screen name="CreateOffer" component={CreateOfferScreen} />
      <Stack.Screen name="InvitationOffer" component={InvitationOfferScreen} />
      <Stack.Screen
        name="ApplicationOffer"
        component={ApplicationOfferScreen}
      />
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
