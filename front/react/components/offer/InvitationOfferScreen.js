/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Searchbar} from 'react-native-paper';

import {HOME_YELLOW} from '../../config/colors';
import {AppbarRecruiter as Appbar} from '../AppbarRecruiter';

export const InvitationOfferScreen = ({route}) => {
  const {offer} = route.params;
  const [value, setValue] = useState('');

  const handleChange = (data) => {
    console.log(data);
    setValue(data);
  };

  return (
    console.log(offer),
    (
      <View style={styles.root}>
        <Text style={styles.title}>Invitation à l'offre</Text>
        <Searchbar
          placeholder="Entrez un email"
          icon="send"
          onChangeText={handleChange}
          value={value}
        />
        <Appbar />
      </View>
    )
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
