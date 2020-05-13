import React, { useState } from 'react'
import { Image, View, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements'

import imageLogo from '../assets/images/logo.png';
import { Button } from './common/Button';
import { FormTextInput } from './common/FormTextInput';
import * as Color from '../config/colors';
import * as Strings from '../config/strings';


export const RegisterScreen = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setIsChecked] = useState(new Map());

    const handleFirstNameChange = (data) => {
        setFirstName({firstName: data});
    };

    const handleLastNameChange = (data) => {
        setLastName({lastName: data});
    };

    const handleEmailChange = (data) => {
        setEmail({email: data});
    };

    const handlePasswordChange = (data) => {
        setPassword({password: data});
    };

    const handleCheckedChange = (data) => {
        setIsChecked(isChecked => isChecked.set(event.target.name, event.target.checked));
    };

    const handleLoginPress = () => {
        console.log('Login button pressed : ', firstName, lastName, email, password, isChecked);
    };

    const checkboxes = [
        {
            name: 'recrutier',
            key: 'recrutier',
            label: 'Recruteur'
        },
        {
            name: 'candidate',
            key: 'candidate',
            label: 'Candidat'
        }
    ]

    return (
        <View style={styles.container}>
            <Image source={imageLogo} style={styles.logo} />
            <View style={styles.form}>
                <FormTextInput
                    value={lastName}
                    onChangeText={handleFirstNameChange}
                    placeholder={Strings.LASTNAME_PLACEHOLDER}
                />
                <FormTextInput
                    value={firstName}
                    onChangeText={handleLastNameChange}
                    placeholder={Strings.FIRSTNAME_PLACEHOLDER}
                />
                <FormTextInput
                    value={email}
                    onChangeText={handleEmailChange}
                    placeholder={Strings.EMAIL_PLACEHOLDER}
                />
                <FormTextInput
                    value={password}
                    onChangeText={handlePasswordChange}
                    placeholder={Strings.PASSWORD_PLACEHOLDER}
                />
                <Form.Group inline>
                    <label>Gender</label>
                    <Form.Radio label="Male" checked={gender === 'Male'} value="Male" onClick={() => setGender('Male')} />
                    <Form.Radio label="Female" checked={gender === 'Female'} value="Female" onClick={() => setGender('Female')} />
                </Form.Group>
                <Button label={Strings.LOGIN} onPress={handleLoginPress} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Color.WHITE,
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
  