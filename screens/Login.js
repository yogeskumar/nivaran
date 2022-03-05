import { View, Text, Image, StyleSheet, KeyboardAvoidingView, ActivityIndicator, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { TextInput, Button } from 'react-native-paper';
import { firebase } from '@react-native-firebase/firestore';

import {  useDispatch } from 'react-redux';
import { LogIn } from '../store/actions';

export default function Login(props) {

    const [mobile, setMobile] = useState();
    const [password, setPassword] = useState('');
    // const previousScreen = props.route.params.previousScreen;

    const dispatch = useDispatch();

    const userLogin = async () => {
        // console.log(prevviousScreen);
        const snapshot = await firebase.firestore().collection('users').where("mobilenumber", "==", mobile).where("password", "==", password).get()
        try {
            if (snapshot.docs[0]._exists) {
                console.log('success')
                dispatch(LogIn(mobile, true));
                setMobile('')
                setPassword('')
                // if (props.navigation.navigate(previousScreen)) {
                //     props.navigation.navigate(previousScreen)
                // }
                // else {
                    props.navigation.navigate('home')
                // }
            } else {
                alert('You are not registered yet, Please signup')
                props.navigation.navigate('signup')
            console.log("No such document!");
        }
        }
        catch (error) {
            dispatch(LogIn('NoUser', false));
            setMobile('')
            setPassword('')
            // props.navigation.navigate(previousScreen);
            alert('Wrong number or password, if you are not registered yet, Please signup')
            props.navigation.navigate('signup')
            console.log(error);
        }
        setMobile('')
        setPassword('')
    }
    return (
        <ScrollView keyboardShouldPersistTaps='handled' contentContainerStyle={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image style={{ width: '50%', height: '30%' }} source={require('../images/Nivaran-logo-in-blue.png')} />
                <Text style={{ fontSize: 35, color:'black' }}>
                    Welcome to Nivaran
                </Text>
                <Text style={{ fontSize: 20, color:'black' }}>
                    Emergency Ka Solution
                </Text>

                <TextInput
                    style={{ width: '70%', marginVertical: 20 }}
                    value={mobile}
                    mode="outlined"
                    label="Enter mobile number"
                    onChangeText={(text) => {
                        setMobile(text)
                    }}
                    maxLength={10}
                    minLength={10}
                    keyboardType='numeric'
                />
                <TextInput
                    style={{ width: '70%' }}
                    value={password}
                    mode="outlined"
                    label="Enter Password"
                    onChangeText={(text) => {
                        setPassword(text)
                    }}
                    maxLength={20}
                />
                <Button
                    style={{ width: '70%', marginVertical: 20 }}
                    disabled={password.length >= 10 ? false : true}
                    mode="contained"
                    onPress={userLogin}
                >Login</Button>
                <TouchableOpacity onPress={()=>props.navigation.navigate('signup')}>
                    <Text style={{color:'black'}}>Don't have an account</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </ScrollView>
    )
};