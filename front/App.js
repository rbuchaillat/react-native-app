/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useMemo } from 'react';
import { StatusBar, StyleSheet, View, ActivityIndicator } from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';

import { RootNavigator } from './react/routes';
import { AuthContext } from './components/context';

const App = () => {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ userToken, setUserToken ] = useState(null);

  const authContext = useMemo(() => ({
    signIn: () => {
      setUserToken("lavan");
      setIsLoading(false);
    },
    signOut: () => {
      setUserToken(null);
      setIsLoading(false);
    },
    signUp: () => {
      setUserToken(null);
      setIsLoading(false);
    },
  }))

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
    <>
      <StatusBar barStyle="dark-content" />
      <PaperProvider>
        <AuthContext.Provider>
          <NavigationContainer>
            {userToken ==! null ? <RootNavigator /> : <RootNavigator />}
          </NavigationContainer>
        </AuthContext.Provider>
      </PaperProvider>
    </>
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

