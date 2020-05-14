/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {RadioButton} from 'react-native-paper';

import {Button} from './common/Button';
import {FormTextInput} from './common/FormTextInput';
import {WHITE} from '../config/colors';
import {
  REGISTER,
  LASTNAME_PLACEHOLDER,
  FIRSTNAME_PLACEHOLDER,
  EMAIL_PLACEHOLDER,
  PASSWORD_PLACEHOLDER,
  RECRUITER,
  CANDIDATE,
} from '../config/strings';

export const RegisterScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('');

  const handleFirstNameChange = (data) => {
    setFirstName(data);
  };

  const handleLastNameChange = (data) => {
    setLastName(data);
  };

  const handleEmailChange = (data) => {
    setEmail(data);
  };

  const handlePasswordChange = (data) => {
    setPassword(data);
  };

  const handleRegisterPress = () => {
    console.log(
      'Login button pressed : ',
      firstName,
      lastName,
      email,
      password,
      type,
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.text}>{REGISTER}</Text>
        <FormTextInput
          value={lastName}
          onChangeText={handleLastNameChange}
          placeholder={LASTNAME_PLACEHOLDER}
        />
        <FormTextInput
          value={firstName}
          onChangeText={handleFirstNameChange}
          placeholder={FIRSTNAME_PLACEHOLDER}
        />
        <FormTextInput
          value={email}
          onChangeText={handleEmailChange}
          placeholder={EMAIL_PLACEHOLDER}
        />
        <FormTextInput
          value={password}
          onChangeText={handlePasswordChange}
          placeholder={PASSWORD_PLACEHOLDER}
          secureTextEntry={true}
        />
        <View style={styles.radioButton}>
          <Text>{RECRUITER}</Text>
          <RadioButton
            value="recruiter"
            status={type === 'recruiter' ? 'checked' : 'unchecked'}
            onPress={() => {
              setType('recruiter');
            }}
          />
          <Text>{CANDIDATE}</Text>
          <RadioButton
            value="candidate"
            status={type === 'candidate' ? 'checked' : 'unchecked'}
            onPress={() => {
              setType('candidate');
            }}
          />
        </View>
        <Button label={REGISTER} onPress={handleRegisterPress} />
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
