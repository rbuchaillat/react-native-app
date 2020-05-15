/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, StyleSheet, Text, Picker} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import {FormTextInput} from '../common/FormTextInput';
import {Button} from '../common/Button';
import {WHITE} from '../../config/colors';
import {
  SUSCRIBE_OFFER,
  OFFER_DESC,
  OFFER_NAME,
  COMPANY_DESC,
  BEGIN_DATE,
  WORK_PLACE,
  VALID_FORM_OFFER,
} from '../../config/strings';
import {AppbarIndex as Appbar} from '../Appbar';

export const CreateOfferScreen = () => {
  const [offerName, setofferName] = useState('');
  const [companyDescription, setcompanyDescription] = useState('');
  const [offerDescription, setofferDescription] = useState('');
  const [dateContract, setdateContract] = useState(new Date());
  const [contractType, setcontractType] = useState('');
  const [workPlace, setworkPlace] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleOfferName = (data) => {
    setofferName(data);
  };

  const handleCompanyDescription = (data) => {
    setcompanyDescription(data);
  };

  const handleOfferDescription = (data) => {
    setofferDescription(data);
  };

  const handleDateContract = (e, data) => {
    setShowDatePicker(false);
    setdateContract(data);
  };

  const handleContractType = (data) => {
    setcontractType(data);
  };

  const handleWorkPlace = (data) => {
    setworkPlace(data);
  };

  const handleValidatePress = () => {
    console.log(
      'Validate button pressed : ',
      offerName,
      companyDescription,
      offerDescription,
      dateContract,
      contractType,
      workPlace,
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.text}>{SUSCRIBE_OFFER}</Text>
        <FormTextInput
          value={offerName}
          onChangeText={handleOfferName}
          placeholder={OFFER_NAME}
        />
        <FormTextInput
          value={companyDescription}
          onChangeText={handleCompanyDescription}
          placeholder={COMPANY_DESC}
          numberOfLines={5}
        />
        <FormTextInput
          value={offerDescription}
          onChangeText={handleOfferDescription}
          placeholder={OFFER_DESC}
          numberOfLines={5}
        />
        <View>
          <Button
            label={BEGIN_DATE}
            onPress={() => setShowDatePicker(true)}
            style={styles.buttonDatePicker}
          />
        </View>
        {showDatePicker && (
          <DateTimePicker
            testID="dateTimePicker"
            timeZoneOffsetInMinutes={0}
            value={dateContract}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={handleDateContract}
          />
        )}
        <Picker
          selectedValue={contractType}
          onValueChange={(itemValue) => handleContractType(itemValue)}>
          <Picker.Item label="CDD" value="CDD" />
          <Picker.Item label="CDI" value="CDI" />
        </Picker>
        <FormTextInput
          value={workPlace}
          onChangeText={handleWorkPlace}
          placeholder={WORK_PLACE}
        />
        <Button label={VALID_FORM_OFFER} onPress={handleValidatePress} />
      </View>
      <Appbar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    textAlign: 'center',
    paddingBottom: 50,
    fontSize: 25,
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    width: '80%',
  },
});
