/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {Button} from 'react-native-paper';
import * as Animatable from 'react-native-animatable';

import {
  HOME_YELLOW,
  LOGIN_BLUE,
  REGISTER_RED,
  WHITE,
  BLACK,
} from '../config/colors';
import {LOGIN, REGISTER} from '../config/strings';
import imageLogo from '../assets/images/logo-white.png';

export const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={BLACK} barStyle="light-content" />
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duraton="1500"
          source={imageLogo}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>
      <Animatable.View
        style={[
          styles.footer,
          {
            backgroundColor: WHITE,
          },
        ]}
        animation="fadeInUpBig">
        <Text
          style={[
            styles.title,
            {
              color: BLACK,
            },
          ]}>
          Suvenirnica
        </Text>
        <Text style={styles.text}>L'application numero #1 de recrutement du moment.</Text>
        <Text style={styles.text}>Développé par 4 étudiants de l'ESGI: Rémi, Lavan, Najla et Samy.</Text>
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button
              style={[
                styles.buttonAuth,
                {
                  backgroundColor: REGISTER_RED,
                },
              ]}
              mode="contained"
              onPress={() => navigation.navigate('Register')}>
              {REGISTER}
            </Button>
          </View>
          <View style={styles.button}>
            <Button
              style={[
                styles.buttonAuth,
                {
                  backgroundColor: LOGIN_BLUE,
                },
              ]}
              mode="contained"
              onPress={() => navigation.navigate('Login')}>
              {LOGIN}
            </Button>
          </View>
        </View>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: HOME_YELLOW,
  },

  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    flex: 1,
    width: '30%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: WHITE,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 50,
  },

  title: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    color: 'grey',
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  button: {
    padding: 2,
  },
  buttonAuth: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    width: 130,
    height: 40,
  },
});
