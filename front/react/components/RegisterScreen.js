/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {RadioButton} from 'react-native-paper';

import {Button} from './common/Button';
import {FormTextInput} from './common/FormTextInput';
import {WHITE} from '../config/colors';
import {
  REGISTER,
  EMAIL_PLACEHOLDER,
  PASSWORD_PLACEHOLDER,
  RECRUITER,
  CANDIDATE,
  PASSWORD_CONFIRM_PLACEHOLDER,
} from '../config/strings';
import {Auth} from '../services/auth';

export const RegisterScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [role, setRole] = useState('');

  const handleEmailChange = (data) => {
    setEmail(data);
  };

  const handlePasswordChange = (data) => {
    setPassword(data);
  };

  const handleConfirmPasswordChange = (data) => {
    setPasswordConfirm(data);
  };

  const handleRegisterPress = async () => {
    if (password === passwordConfirm) {
      let response = await Auth.register(email, [role], password);

      if (response.ok) {
        navigation.navigate('Login');
      } else {
        alert('Inscription impossible');
      }
    } else {
      alert('mot de passe différent');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.text}>{REGISTER}</Text>
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
        <FormTextInput
          value={passwordConfirm}
          onChangeText={handleConfirmPasswordChange}
          placeholder={PASSWORD_CONFIRM_PLACEHOLDER}
          secureTextEntry={true}
        />
        <View style={styles.radioButton}>
          <Text>{RECRUITER}</Text>
          <RadioButton
            value="recruiter"
            status={role === 'recruiter' ? 'checked' : 'unchecked'}
            onPress={() => {
              setRole('recruiter');
            }}
          />
          <Text>{CANDIDATE}</Text>
          <RadioButton
            value="candidate"
            status={role === 'candidate' ? 'checked' : 'unchecked'}
            onPress={() => {
              setRole('candidate');
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
