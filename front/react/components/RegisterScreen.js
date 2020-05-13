import React, { useState } from 'react'
import { Image, View, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';

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

    const handleRegisterPress = () => {
        console.log('Login button pressed : ', firstName, lastName, email, password, isChecked);
    };

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
                <View>
                    <RadioButton
                        value="recruiter"
                        status={isChecked === 'recruiter' ? 'checked' : 'unchecked'}
                        onPress={() => { setIsChecked('recruiter') }}
                    />
                    <RadioButton
                        value="candidate"
                        status={isChecked === 'candidate' ? 'checked' : 'unchecked'}
                        onPress={() => { setIsChecked('candidate') }}
                    />
                </View>
                <Button label={Strings.LOGIN} onPress={handleRegisterPress} />
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
  