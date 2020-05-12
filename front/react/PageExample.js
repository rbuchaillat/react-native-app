/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

export const PageExample = ({navigation}) => {
  return (
    <View style={styles.root}>
      <Text>Example page</Text>
      <Button mode="contained" onPress={() => navigation.goBack()}>
        Go back
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
