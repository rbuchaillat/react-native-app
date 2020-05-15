/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';

import {HOME_YELLOW} from '../../config/colors';
import {AppbarCandidate as Appbar} from '../AppbarCandidate';

export const ApplicationOfferScreen = () => {
  return (
    <View style={styles.root}>
      <View>
        <Text style={styles.title}>Candidature</Text>
      </View>
      <Appbar />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    padding: 20,
    fontWeight: 'bold',
    fontSize: 20,
    backgroundColor: HOME_YELLOW,
    textTransform: 'uppercase',
  },
});
