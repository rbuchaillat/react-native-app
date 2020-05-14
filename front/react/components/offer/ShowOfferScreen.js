/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {Text} from 'react-native-paper';

import {HOME_YELLOW} from '../../config/colors';
import {isEmpty} from '../../helpers/utility';

export const ShowOfferScreen = ({route}) => {
  const {itemId} = route.params;
  console.log(itemId);

  const [data, setData] = useState([]);

  useEffect(() => {
    //id de l'offer -> itemId
    const fakeData = {id: 1, name: 'TEST', descriptionOffer: 'test test test'};
    setData(fakeData);
  }, []);

  return isEmpty(data) ? (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  ) : (
    <View style={styles.root}>
      <Text style={styles.title}>Offre : {data.name}</Text>
      <Text>{data.descriptionOffer}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
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
