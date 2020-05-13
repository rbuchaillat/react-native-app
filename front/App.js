/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Route from './components/Route';

const App = () => {
  return (
    <NavigationContainer>
      <Route />
    </NavigationContainer>
  );
};

export default App;
