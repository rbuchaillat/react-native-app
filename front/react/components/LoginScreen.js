/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Image, View, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import {FormTextInput} from './common/FormTextInput';
import {Button} from './common/Button';
import {WHITE} from '../config/colors';
import {
  EMAIL_PLACEHOLDER,
  PASSWORD_PLACEHOLDER,
  LOGIN,
} from '../config/strings';
import imageLogo from '../assets/images/logo-colors.png';
import {Auth} from '../services/auth';

export const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (data) => {
    setEmail(data);
  };

  const handlePasswordChange = (data) => {
    setPassword(data);
  };

  const handlePress = async () => {
    let response = await Auth.login(email, password);
    let json = await response.json();

    if (response.ok) {
      const sessionContext = JSON.stringify({token: json.token});
      await AsyncStorage.setItem('@storage_session', sessionContext);
    } else {
      alert('Email ou Mot de passe incorrect');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={imageLogo} style={styles.logo} />
      <View style={styles.form}>
        <FormTextInput
          value={email}
          onChangeText={handleEmailChange}
          placeholder={EMAIL_PLACEHOLDER}
        />
        <FormTextInput
          value={password}
          onChangeText={handlePasswordChange}
          placeholder={PASSWORD_PLACEHOLDER}
        />
        <Button label={LOGIN} onPress={() => handlePress()} />
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
  logo: {
    flex: 1,
    width: '30%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    width: '80%',
  },
});
