/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {Text, Button} from 'react-native-paper';

import {HOME_YELLOW} from '../../config/colors';
import {isEmpty} from '../../helpers/utility';
import {AppbarIndex as Appbar} from '../Appbar';

export const ShowOfferScreen = ({route, navigation}) => {
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
      <View>
        <Button
          icon="arrow-left"
          style={styles.goBack}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.title}>Offre : {data.name}</Text>
      </View>
      <Text>{data.descriptionOffer}</Text>
      <Appbar />
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
  goBack: {
    position: 'absolute',
    left: 15,
    top: 15,
    zIndex: 999,
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
