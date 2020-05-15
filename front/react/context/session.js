/* eslint-disable prettier/prettier */
import {createContext} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export const getSessionStorage = async () => {
  const sessionStorage = await AsyncStorage.getItem('@storage_session');

  return sessionStorage === null
    ? {auth: false, token: ''}
    : {auth: true, token: JSON.parse(sessionStorage).token};
};

export const SessionContext = createContext({
  session: {auth: false, token: ''},
  setSession: () => {},
});
