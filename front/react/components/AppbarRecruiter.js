/* eslint-disable prettier/prettier */
import React from 'react';
import {Appbar} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

export const AppbarRecruiter = () => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    await AsyncStorage.removeItem('@storage_session');
    navigation.navigate('Home');
  };

  return (
    <Appbar style={styles.bottom}>
      <Appbar.Action
        titleRef="test"
        icon="pirate"
        onPress={() => navigation.navigate('ListOfferRecruiter')}
      />
      <Appbar.Action
        icon="pencil"
        onPress={() => navigation.navigate('CreateOffer')}
      />
      <Appbar.Action
        icon="logout"
        onPress={() => handleLogout()}
        style={styles.logout}
      />
    </Appbar>
  );
};

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  logout: {
    position: 'absolute',
    right: 0,
  },
});
