import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native'
import React from 'react'
import { firebase } from '@react-native-firebase/firestore';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Colors } from '../Colors'; import { Dimensions } from "react-native";


var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default function Profile(props) {
    const [userData, setUserData] = useState();
    const mobile = useSelector(state => state.mobile)
    useEffect(() => {
        const myFun = async () => {
            const snapshot = await firebase.firestore().collection('users').where("mobilenumber", "==", mobile).get()
            console.log('profile0')
            try {
                if (snapshot.docs[0]._exists) {
                    setUserData(snapshot.docs[0]._data)
                    console.log(userData);
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.log(error);
            }
        }
        myFun()
        console.log('profile1')
    }, [])
    return (
        <>
            {userData ?
                <SafeAreaView
                    style={styles.container}
                >
                    {/* part where actual data to be shown */}
                    <ScrollView contentContainerStyle={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        // backgroundColor: 'red'
                    }}>
                        <View style={styles.upperSide}>
                            <MaterialIcons
                                name='account-circle'
                                size={150}
                            // color={Colors.primary}
                            // style={{ marginRight: 15 }}
                            // onPress={()=>auth().signOut()}
                            />
                            <Text style={{ fontSize: 30 }}>{userData.name}</Text>
                            <Text style={{ fontSize: 20 }}>{userData.mobilenumber}</Text>
                        </View>
                        <ScrollView contentContainerStyle={{ width: width, paddingLeft: 20 }}>
                            <Text style={{ fontSize: 30, color: 'black', marginVertical: 20, fontWeight: '900' }}>Account Info</Text>
                            <View style={{}}>
                                <View style={styles.blocks}>
                                    <MaterialIcons
                                        name='person'
                                        size={50}
                                        color={Colors.primary}
                                        style={{ marginRight: 15 }}
                                    // onPress={()=>auth().signOut()}
                                    />
                                    <View>
                                        <Text style={{ color: 'black', fontSize: 18, fontWeight: '900' }}>Name</Text>
                                        <Text style={{ color: 'black', fontSize: 15, fontWeight: '700' }}>{userData.name}</Text>
                                    </View>
                                </View>
                                <View style={styles.blocks}>
                                    <MaterialIcons
                                        name='phone'
                                        size={50}
                                        color={Colors.primary}
                                        style={{ marginRight: 15 }}
                                    // onPress={()=>auth().signOut()}
                                    />
                                    <View>
                                        <Text style={{ color: 'black', fontSize: 18, fontWeight: '900' }}>Phone</Text>
                                        <Text style={{ color: 'black', fontSize: 15, fontWeight: '700' }}>{userData.mobilenumber}</Text>
                                    </View>
                                </View>
                                <View style={styles.blocks}>
                                    <MaterialIcons
                                        name='portrait'
                                        size={50}
                                        color={Colors.primary}
                                        style={{ marginRight: 15 }}
                                    // onPress={()=>auth().signOut()}
                                    />
                                    <View>
                                        <Text style={{ color: 'black', fontSize: 18, fontWeight: '900' }}>Age</Text>
                                        <Text style={{ color: 'black', fontSize: 15, fontWeight: '700' }}>{userData.age ? userData.age : 'not available'}</Text>
                                    </View>
                                </View>
                                <View style={styles.blocks}>
                                    <MaterialIcons
                                        name='accessibility'
                                        size={50}
                                        color={Colors.primary}
                                        style={{ marginRight: 15 }}
                                    // onPress={()=>auth().signOut()}
                                    />
                                    <View>
                                        <Text style={{ color: 'black', fontSize: 18, fontWeight: '900' }}>Gender</Text>
                                        <Text style={{ color: 'black', fontSize: 15, fontWeight: '700' }}>{userData.gender ? userData.gender : 'not available'}</Text>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </ScrollView>
                </SafeAreaView>

                :
                <Text>Nothing to show</Text>
            }
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.background,
    },
    upperSide: {
        backgroundColor: '#82b2ff',
        width: width,
        height: height * 0.35,
        justifyContent: 'center',
        alignItems: 'center',
        // flex: 1,
        //   padding: 163
    },
    blocks: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginVertical: 15,
        backgroundColor: Colors.background,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 3,
        zIndex: 3
    }
})