/* eslint-disable prettier/prettier */
import React from 'react';
import {StatusBar} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';

import {RootNavigator} from './react/routes';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <PaperProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </PaperProvider>
    </>
  );
};

export default App;
