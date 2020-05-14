/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
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
  TYPE_CONTRACT,
  WORK_PLACE,
  VALID_FORM_OFFER,
} from '../../config/strings';
export const CreateOfferScreen = () => {
  const [offerName, setofferName] = useState('');
  const [companyDescription, setcompanyDescription] = useState('');
  const [offerDescription, setofferDescription] = useState('');
  const [dateContract, setdateContract] = useState(new Date());
  const [contractType, setcontractType] = useState('');
  const [workPlace, setworkPlace] = useState('');
  const [isButtonDatePickerVisible, setisButtonDatePickerVisible] = useState(
    false,
  );

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
    setisButtonDatePickerVisible(false);
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
        {isButtonDatePickerVisible && (
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

        <Button
          label={BEGIN_DATE}
          onPress={() => setisButtonDatePickerVisible(true)}
        />
        <FormTextInput
          value={contractType}
          onChangeText={handleContractType}
          placeholder={TYPE_CONTRACT}
        />
        <FormTextInput
          value={workPlace}
          onChangeText={handleWorkPlace}
          placeholder={WORK_PLACE}
        />
        <Button label={VALID_FORM_OFFER} onPress={handleValidatePress} />
      </View>
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
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 20,
  },
});
