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
import {AppbarRecruiter as Appbar} from '../AppbarRecruiter';
import {Offer} from '../../services/offer';

export const CreateOfferScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [descriptionEntreprise, setDescriptionEntreprise] = useState('');
  const [descriptionOffre, setDescriptionOffre] = useState('');
  const [dateContract, setdateContract] = useState(new Date());
  const [contractType, setcontractType] = useState('CDD');
  const [workPlace, setworkPlace] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleName = (data) => {
    setName(data);
  };

  const handleDescriptionOffre = (data) => {
    setDescriptionEntreprise(data);
  };

  const handleOfferDescription = (data) => {
    setDescriptionOffre(data);
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

  const handleValidatePress = async () => {
    const response = await Offer.create(
      name,
      descriptionEntreprise,
      descriptionOffre,
      dateContract,
      contractType,
      workPlace,
    );
    const json = await response.json();

    if (response.ok) {
      navigation.navigate('InvitationOffer', {offer: json});
    } else {
      alert('Erreur de création');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.text}>{SUSCRIBE_OFFER}</Text>
        <FormTextInput
          value={name}
          onChangeText={handleName}
          placeholder={OFFER_NAME}
        />
        <FormTextInput
          value={descriptionEntreprise}
          onChangeText={handleDescriptionOffre}
          placeholder={COMPANY_DESC}
          numberOfLines={5}
        />
        <FormTextInput
          value={descriptionOffre}
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
