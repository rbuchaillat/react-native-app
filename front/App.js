/* eslint-disable prettier/prettier */
import React, { useState, useMemo, useEffect } from 'react';
import { StatusBar, StyleSheet, View, ActivityIndicator } from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';

import { RootNavigator } from './react/routes';
import { RootNavigatorr } from './react/routes2';
import { AuthContext } from './react/components/context/context'

const App = () => {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ userToken, setUserToken ] = useState(null);

  const authContext = useMemo(() => ({
    login: () => {
      setUserToken('fgkj');
      setIsLoading(false);
    },
    signOut: () => {
      setUserToken(null);
      setIsLoading(false);
    },
    register: () => {
      setUserToken('fgkj');
      setIsLoading(false)
    },
  }), [])

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if ( isLoading ) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return (
        <AuthContext.Provider value={authContext}>
          <NavigationContainer>
          { userToken !== null ? <RootNavigatorr /> : <RootNavigator /> }
          </NavigationContainer>
        </AuthContext.Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
})