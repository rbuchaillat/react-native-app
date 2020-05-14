/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

import {SILVER} from '../../config/colors';

export const FormTextInput = ({style, ...otherProps}) => {
  return (
    <TextInput
      selectionColor="#428af8"
      style={[styles.textInput, style]}
      {...otherProps}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: SILVER,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 20,
  },
});
