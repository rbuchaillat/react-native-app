/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';

import {Routes} from './react/routes';
import {SessionContext, getSessionStorage} from './react/context/session';

const App = () => {
  const [session, setSession] = useState(getSessionStorage());
  const contextValue = {session, setSession};

  useEffect(() => {
    setSession(getSessionStorage);
  }, []);

  return (
    <SessionContext.Provider value={contextValue}>
      <StatusBar barStyle="dark-content" />
      <PaperProvider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </PaperProvider>
    </SessionContext.Provider>
  );
};

export default App;
