import React, { useState } from 'react'
import { StyleSheet, Text, View, FormTextInput, Button } from 'react-native'
import DatePicker from 'react-native-datepicker';

import { SUSCRIBE_OFFER, OFFER_NAME, COMPANY_DESC, TYPE_CONTRACT, OFFER_DESC, WORK_PLACE, REGISTER } from '../config/strings';

export const CreateOfferScreen = () => {
    const [offerName, setofferName] = useState('');
    const [companyDescription, setcompanyDescription] = useState('');
    const [offerDescription, setofferDescription] = useState('');
    const [contractType, setcontractType] = useState('');
    const [workPlace, setworkPlace] = useState('');

    const handleOfferName = (data) => {
        setofferName({offerName: data});
    };

    const handleCompanyDescription = (data) => {
        setcompanyDescription({companyDescription: data});
    };

    const handleOfferDescription = (data) => {
        setofferDescription({offerDescription: data});
    };

    const handleContractType = (data) => {
        setcontractType({contractType: data});
    };

    const handleWorkPlace = (data) => {
        setworkPlace({workPlace: data});
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
            />
            <FormTextInput
                value={offerDescription}
                onChangeText={handleOfferDescription}
                placeholder={OFFER_DESC}
            />
            {/* <DatePicker
                style={{width: 200}}
                mode="date"
                placeholder="select date"
                format="YYYY-MM-DD"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                    dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                    },
                    dateInput: {
                        marginLeft: 36
                    }
                }}
                onDateChange={console.log("test")}
            /> */}
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
            <Button label={REGISTER} onPress={() => alert("hola")} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})
