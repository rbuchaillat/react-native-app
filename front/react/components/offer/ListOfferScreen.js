/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {List, Button} from 'react-native-paper';

import {HOME_YELLOW, DODGER_BLUE} from '../../config/colors';
import {AppbarRecruiter} from '../AppbarRecruiter';
import {AppbarCandidate} from '../AppbarCandidate';
import {Offer} from '../../services/offer';
import {isEmpty} from '../../helpers/utility';

export const ListOfferScreen = ({navigation, extraData}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await Offer.list();
      const json = await response.json();
      setData(json['hydra:member']);
    };
    fetchData();
  }, []);

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Mes offres</Text>
      {data !== undefined && !isEmpty(data) ? (
        data.map((value, index) => (
          <List.Item
            key={index}
            title={value.name}
            description={value.descriptionOffre}
            left={(props) => (
              <List.Icon {...props} icon="firebase" color={DODGER_BLUE} />
            )}
            right={(props) => (
              <Button {...props} style={styles.button}>
                Voir
              </Button>
            )}
            onPress={() =>
              navigation.navigate('ShowOffer', {
                itemId: value.id,
              })
            }
          />
        ))
      ) : (
        <View style={styles.noData}>
          <Text>Aucune offre ...</Text>
        </View>
      )}
      {extraData === 'recruiter' ? <AppbarRecruiter /> : <AppbarCandidate />}
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
  button: {
    justifyContent: 'center',
  },
  noData: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
