/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {List} from 'react-native-paper';

import {HOME_YELLOW, DODGER_BLUE} from '../../config/colors';

export const ListOfferScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fakeData = [
      {name: 'TEST', descriptionOffer: 'test test test'},
      {name: 'TEST', descriptionOffer: 'test test test'},
    ];
    setData(fakeData);
  }, []);

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Mes offres</Text>
      {data.length > 0 ? (
        data.map((value, index) => (
          <List.Item
            key={index}
            title={value.name}
            description={value.descriptionOffer}
            left={(props) => (
              <List.Icon {...props} icon="firebase" color={DODGER_BLUE} />
            )}
          />
        ))
      ) : (
        <Text>Aucune donné ...</Text>
      )}
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
