/* eslint-disable prettier/prettier */
import {createContext} from 'react';

export const getSessionStorage = () => {
  return {auth: false, token: ''};
};

export const SessionContext = createContext({
  session: {auth: false, token: ''},
  setSession: () => {},
});
