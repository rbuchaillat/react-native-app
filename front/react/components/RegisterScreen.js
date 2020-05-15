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
import {RadioButton} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import {Button} from './common/Button';
import {FormTextInput} from './common/FormTextInput';
import {WHITE, BLACK, HOME_YELLOW} from '../config/colors';
import {
  REGISTER,
  EMAIL_PLACEHOLDER,
  PASSWORD_PLACEHOLDER,
  RECRUITER,
  CANDIDATE,
  PASSWORD_CONFIRM_PLACEHOLDER,
  VALID_FORM_OFFER,
} from '../config/strings';
import {Auth} from '../services/auth';

export const RegisterScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [role, setRole] = useState('');
  const [secureTextEntry, setsecureTextEntry] = useState(true);
  const [secureTextEntry2, setsecureTextEntry2] = useState(true);

  const handleEmailChange = (data) => {
    setEmail(data);
  };

  const handlePasswordChange = (data) => {
    setPassword(data);
  };

  const handleConfirmPasswordChange = (data) => {
    setPasswordConfirm(data);
  };

  const handleSecureTextEntry = (data) => {
    setsecureTextEntry(!secureTextEntry);
  };

  const handleSecureTextEntry2 = (data) => {
    setsecureTextEntry2(!secureTextEntry2);
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
      <StatusBar backgroundColor={BLACK} barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>{REGISTER}</Text>
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

        <Text
          style={[
            styles.text_footer,
            {
              color: BLACK,
            },
          ]}>
          {PASSWORD_CONFIRM_PLACEHOLDER}
        </Text>
        <View style={styles.action}>
          <FontAwesome name="lock" color={BLACK} size={20} />
          <FormTextInput
            placeholder={PASSWORD_CONFIRM_PLACEHOLDER}
            style={[
              styles.textInput,
              {
                color: BLACK,
              },
            ]}
            autoCapitalize="none"
            onChangeText={handleConfirmPasswordChange}
            value={passwordConfirm}
            secureTextEntry={secureTextEntry2 ? true : false}
          />
          <TouchableOpacity onPress={handleSecureTextEntry2}>
            {secureTextEntry2 ? (
              <Feather name="eye" color="grey" size={20} />
            ) : (
              <Feather name="eye-off" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View>

        <Text
          style={[
            styles.text_footer,
            {
              color: BLACK,
            },
          ]}>
          Êtes-vous un..
        </Text>
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
        <Button
          label={VALID_FORM_OFFER}
          onPress={() => handleRegisterPress()}
        />
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
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 20,
  },
});
