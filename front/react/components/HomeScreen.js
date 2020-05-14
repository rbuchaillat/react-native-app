/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {Image, View, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

import {HOME_YELLOW, LOGIN_BLUE, REGISTER_RED} from '../config/colors';
import {LOGIN, REGISTER} from '../config/strings';
import imageLogo from '../assets/images/logo-white.png';

export const HomeScreen = ({navigation}) => {
  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch('https://localhost:8443/users');
      let json = await response.json();
      console.log(json);
    };
    fetchData();
  }, []);

  return (
    <View style={styles.root}>
      <View style={styles.main}>
        <Image source={imageLogo} style={styles.logo} />
      </View>
      <Button
        style={styles.buttonLogin}
        mode="contained"
        onPress={() => navigation.navigate('Login')}>
        {LOGIN}
      </Button>
      <Button
        style={styles.buttonRegister}
        mode="contained"
        onPress={() => navigation.navigate('Register')}>
        {REGISTER}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'stretch',
  },
  main: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: HOME_YELLOW,
  },
  logo: {
    flex: 1,
    width: '30%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  buttonLogin: {
    flexShrink: 1,
    justifyContent: 'center',
    height: 70,
    borderRadius: 0,
    backgroundColor: LOGIN_BLUE,
  },
  buttonRegister: {
    flexShrink: 1,
    justifyContent: 'center',
    height: 70,
    borderRadius: 0,
    backgroundColor: REGISTER_RED,
  },
});
