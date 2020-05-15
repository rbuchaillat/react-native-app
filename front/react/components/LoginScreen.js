/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  StatusBar,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-community/async-storage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import {FormTextInput} from './common/FormTextInput';
import {Button} from './common/Button';
import {WHITE, HOME_YELLOW, BLACK} from '../config/colors';
import {
  EMAIL_PLACEHOLDER,
  PASSWORD_PLACEHOLDER,
  VALID_FORM_OFFER,
} from '../config/strings';
import {Auth} from '../services/auth';

export const LoginScreen = ({navigation}) => {
  const jwt_decode = require('jwt-decode');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setsecureTextEntry] = useState(true);

  const handleEmailChange = (data) => {
    setEmail(data);
  };

  const handlePasswordChange = (data) => {
    setPassword(data);
  };

  const handleSecureTextEntry = (data) => {
    setsecureTextEntry(!secureTextEntry);
  };

  const handlePress = async () => {
    const response = await Auth.login(email, password);
    const json = await response.json();

    if (response.ok) {
      const sessionContext = JSON.stringify({token: json.token});
      await AsyncStorage.setItem('@storage_session', sessionContext);
      const paylaod = jwt_decode(json.token);
      paylaod.roles[0] === 'recruiter'
        ? navigation.navigate('ListOfferRecruiter')
        : navigation.navigate('ListOfferCandidate');
    } else {
      alert('Email ou Mot de passe incorrect');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={BLACK} barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Connexion</Text>
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        style={[
          styles.footer,
          {
            backgroundColor: WHITE,
          },
        ]}>
        <Text
          style={[
            styles.text_footer,
            {
              color: BLACK,
            },
          ]}>
          {EMAIL_PLACEHOLDER}
        </Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={BLACK} size={20} />
          <FormTextInput
            placeholder={EMAIL_PLACEHOLDER}
            style={[
              styles.textInput,
              {
                color: BLACK,
              },
            ]}
            autoCapitalize="none"
            onChangeText={handleEmailChange}
            value={email}
          />
        </View>

        <Text
          style={[
            styles.text_footer,
            {
              color: BLACK,
            },
          ]}>
          {PASSWORD_PLACEHOLDER}
        </Text>
        <View style={styles.action}>
          <FontAwesome name="lock" color={BLACK} size={20} />
          <FormTextInput
            placeholder={PASSWORD_PLACEHOLDER}
            style={[
              styles.textInput,
              {
                color: BLACK,
              },
            ]}
            autoCapitalize="none"
            onChangeText={handlePasswordChange}
            value={password}
            secureTextEntry={secureTextEntry ? true : false}
          />
          <TouchableOpacity onPress={handleSecureTextEntry}>
            {secureTextEntry ? (
              <Feather name="eye" color="grey" size={20} />
            ) : (
              <Feather name="eye-off" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View>
        <Button label={VALID_FORM_OFFER} onPress={() => handlePress()} />
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: HOME_YELLOW,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
});
