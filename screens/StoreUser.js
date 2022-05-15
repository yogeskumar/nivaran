import {
    View,
    Text,
    Image,
    StyleSheet,
    KeyboardAvoidingView,
    TouchableOpacity,
    ActivityIndicator,
    SafeAreaView,
    ScrollView
} from "react-native";
import React, { useState } from "react";
import { TextInput, Button } from "react-native-paper";
import firestore from '@react-native-firebase/firestore';

export default function StoreUser(props) {

    const [name, setName] = useState();
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [loading, setLoading] = useState(false);

    if (loading) {
        return <ActivityIndicator size='large' />
    }

    async function StoreNameAndPassword() {
        try {
            setLoading(true)
            if (password1 !== password2) {
                setLoading(false)
                alert('Passwords do not match!')
                return
            }
            if (name.length < 8) {
                setLoading(false)
                alert('Enter a valid name!')
                return
            }
            // code here to store to firebse
            // const uid = () => {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < 25; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            //     return result;
            // }
            await firestore().collection('users').doc(String(result)).set({
                mobilenumber: props.route.params.mobileNumber,
                name: name,
                password: password1,
                uid: result
            })
            props.navigation.navigate('login')
        } catch (error) {
            console.log(error);
            alert('something went wrong')
        }
    }

    return (
        // <KeyboardAvoidingView behavior="position" style={{ alignItems: "center" }}>
        <ScrollView contentContainerStyle={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <Image style={{ width: '70%', height: '40%' }} source={require('../images/Nivaran-logo-in-blue.png')} />
                <Text style={{ fontSize: 35 }}>
                    Welcome to Nivaran
                </Text>
                <Text style={{ fontSize: 20 }}>
                    Emergency Ka Solution
                </Text>
                <TextInput
                    style={{ width: '70%', marginVertical: 20 }}
                    value={name}
                    mode="outlined"
                    label="Enter Name"
                    onChangeText={(text) => {
                        setName(text)
                    }}
                    maxLength={35}
                />
                <TextInput
                    style={{ width: '70%' }}
                    value={password1}
                    mode="outlined"
                    label="Enter New Password"
                    secureTextEntry={true}
                    onChangeText={(text) => {
                        setPassword1(text)
                    }}
                    // minLength={10}
                    maxLength={20}
                />
                <TextInput
                    style={{ width: '70%', marginVertical: 20 }}
                    value={password2}
                    mode="outlined"
                    label="Confirm New Password"
                    secureTextEntry={true}
                    onChangeText={(text) => {
                        setPassword2(text)
                    }}
                    // minLength={10}
                    maxLength={20}
                />
                <Button
                    style={{ width: '70%', marginBottom: 20 }}
                    disabled={password1.length >= 10 && password2.length >= 10 ? false : true}
                    mode="contained"
                    onPress={StoreNameAndPassword}
                >SignUp Now</Button>

            </SafeAreaView>
        </ScrollView>
        // </KeyboardAvoidingView>
    );
}