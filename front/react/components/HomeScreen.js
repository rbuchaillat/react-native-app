/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

export const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.root}>
      <Text>Home</Text>
      <Button mode="contained" onPress={() => navigation.navigate('Login')}>
        Login
      </Button>      
      <Button mode="contained" onPress={() => navigation.navigate('Register')}>
        Register
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
