/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Image, View, StyleSheet} from 'react-native';

import {FormTextInput} from './common/FormTextInput';
import {Button} from './common/Button';
import {WHITE} from '../config/colors';
import {
  EMAIL_PLACEHOLDER,
  PASSWORD_PLACEHOLDER,
  LOGIN,
} from '../config/strings';
import imageLogo from '../assets/images/logo-colors.png';
import {getSessionStorage} from '../context/session';

export const LoginScreen = () => {
  console.log(getSessionStorage());

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (data) => {
    setEmail({email: data});
  };

  const handlePasswordChange = (data) => {
    setPassword({password: data});
  };

  const handlePress = () => {
    console.log('press login');
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
        <Button label={LOGIN} onPress={() => handlePress} />
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
