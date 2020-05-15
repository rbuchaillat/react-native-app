/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {Text, Button} from 'react-native-paper';

import {HOME_YELLOW} from '../../config/colors';
import {isEmpty} from '../../helpers/utility';
import {AppbarRecruiter as Appbar} from '../AppbarRecruiter';
import {Offer} from '../../services/offer';

export const ShowOfferScreen = ({route, navigation}) => {
  const {itemId} = route.params;
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await Offer.show(itemId);
      const json = await response.json();
      setData(json);
    };
    fetchData();
  }, [itemId]);

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
      <View style={styles.content}>
        <View style={styles.element}>
          <Text style={styles.titleItem}>Description de l'offre</Text>
          <Text style={styles.subtitleItem}>{data.descriptionOffre}</Text>
        </View>
        <View style={styles.element}>
          <Text style={styles.titleItem}>Description de l'entreprise</Text>
          <Text style={styles.subtitleItem}>{data.descriptionEntreprise}</Text>
        </View>
        <View style={styles.element}>
          <Text style={styles.titleItem}>Date de début</Text>
          <Text style={styles.subtitleItem}>{data.dateDebut}</Text>
        </View>
        <View style={styles.element}>
          <Text style={styles.titleItem}>Type de contrat</Text>
          <Text style={styles.subtitleItem}>{data.typeContrat}</Text>
        </View>
        <View style={styles.element}>
          <Text style={styles.titleItem}>Lieu</Text>
          <Text style={styles.subtitleItem}>{data.lieu}</Text>
        </View>
      </View>
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
  content: {
    flex: 1,
  },
  element: {
    padding: 15,
  },
  titleItem: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  subtitleItem: {
    fontSize: 18,
  },
});
