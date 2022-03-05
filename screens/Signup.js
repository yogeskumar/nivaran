import {
    View,
    Text,
    Image,
    StyleSheet,
    KeyboardAvoidingView,
    TouchableOpacity,
    ActivityIndicator,
    SafeAreaView,
    ScrollView,
} from "react-native";
import React, { useState } from "react";
import { TextInput, Button } from "react-native-paper";
import auth from '@react-native-firebase/auth';
import { firebase } from '@react-native-firebase/firestore';

export default function SignUp({ navigation, route }) {

    const [mobileNumber, setMobileNumber] = useState('');
    const [confirm, setConfirm] = useState(null);
    const [code, setCode] = useState('');
    const [loading, setLoading] = useState(false);

    if (loading) {
        return <ActivityIndicator size='large' />
    }

    // Handle the button press
    async function sendOTP() {
        const snapshot = await firebase.firestore().collection('users').where("mobilenumber", "==", mobileNumber).get()
        try {
            if (snapshot.docs[0]._exists) {
                alert('User already exist')
                setMobileNumber('')
                return
            } else {
                console.log("No such document!");
            }
        }
        catch (error) {
        try {
            setLoading(true)
            const confirmation = await auth().signInWithPhoneNumber('+91'+ mobileNumber);
            setConfirm(confirmation);
            setLoading(false)
        }
        catch (err) {
            console.log(err);
            alert('Some error occured')
            setLoading(false)
            console.log(2);
        }
        }
    }

    async function confirmCode() {
        try {
            setLoading(true)
            await confirm.confirm(code);
            setLoading(false)
            navigation.navigate('storeuser', {
                mobileNumber:mobileNumber
            })
        } catch (error) {
            console.log('Invalid code.');
            console.log(error);
            alert('Something went wrong')
            setCode('')
            setLoading(false)
        }
        setLoading(false)
    }

    return (
        // <KeyboardAvoidingView behavior="position" style={{ alignItems: "center" }}>
        <ScrollView keyboardShouldPersistTaps='handled' contentContainerStyle={{flex:1}}>
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{width:'70%', height:'40%'}} source={require('../images/Nivaran-logo-in-blue.png')}/>
                <Text style={{ fontSize: 35, color: 'black'}}>
                    Welcome to Nivaran
                </Text>
                <Text style={{fontSize:20, color:'black'}}>
                    Emergency Ka Solution
                </Text>
                {
                    confirm ?
                        <>
                            <TextInput
                                style={{ width: '70%', marginVertical: 20 }}
                                value={code}
                                mode="outlined"
                                label="Enter OTP"
                                onChangeText={(text) => {
                                    setCode(text)
                                }}
                                keyboardType='numeric'
                                maxLength={6}
                            />
                            <Button
                                style={{ width: '70%', marginBottom: 20 }}
                                disabled={code.length == 6 ? false : true}
                                mode="contained"
                                onPress={confirmCode }
                            >Confirm OTP</Button>
                        </>
                        :
                        <>
            <TextInput
                style={{width:'70%', marginVertical:20}}
                    value={mobileNumber}
                    mode="outlined"
                    label="Mobile Number"
                    onChangeText={(text) => {
                    setMobileNumber(text)
                    }}
                    keyboardType='numeric'
                    maxLength={10}
                />
            <Button
                style={{width:'70%', marginBottom:20}}
                    disabled={mobileNumber.length == 10 ? false : true}
                    mode="contained"
                    onPress={sendOTP}
                            >Get OTP</Button></>
                }
                <TouchableOpacity onPress={() => navigation.navigate('login')}>
                    <Text style={{ color: 'black' }}>Already have an account</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </ScrollView>
        // </KeyboardAvoidingView>
    );
}
