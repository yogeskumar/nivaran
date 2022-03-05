import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../Colors';
import { Button } from 'react-native-paper';
import { Linking } from 'react-native'
import { useEffect } from 'react';
import { useState } from 'react';

export default function ContactCard(props) {
    return (
        <View style={styles.container}>
            {
                props.member ?
                    <View>
                        {
                            props.member.image === "not available" ? 
                                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>{console.log(props.member)}
                                    <MaterialIcons
                                        name='account-circle'
                                        size={42}
                                        color={Colors.primary}
                                        style={{ marginRight: 15 }}
                                    />
                                    <View>
                                        <Text style={{ color: 'black', fontSize: 20, fontWeight: '700' }}>{props.member.name}</Text>
                                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                            <Text style={{ color: '#a3a3a3', fontSize: 13 }}>{props.member.age} yrs </Text>
                                            <Text style={{ color: '#a3a3a3', fontSize: 13 }}>{props.member.gender}</Text>
                                        </View>
                                    </View>
                                </View>
                                :
                                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <Image source={props.member.image} style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10 }} />
                                    <View>
                                        <Text style={{ color: 'black', fontSize: 20, fontWeight: '700' }}>{props.member.name}</Text>
                                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                            <Text style={{ color: '#a3a3a3', fontSize: 13 }}>{props.member.role}, </Text>
                                            <Text style={{ color: '#a3a3a3', fontSize: 13 }}>{props.member.gender}</Text>
                                        </View>
                                    </View>
                                </View>
                        }
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 3, marginVertical: 10 }}>
                            <View>
                                <Text selectable={true} style={{ color: 'black', fontWeight: '600', fontSize: 18 }}>{props.member.mobile}</Text>
                                <Text style={{ color: Colors.primary, fontWeight: '900', fontSize: 12 }}>Contact Number</Text>
                            </View>
                            <View>
                                <Text selectable={true} style={{ color: 'black', fontWeight: '600', fontSize: 18 }}>{props.member.address}</Text>
                                <Text style={{ color: Colors.primary, fontWeight: '900', fontSize: 12, textAlign: 'right' }}>Address</Text>
                            </View>
                        </View>
                        <View style={{
                            display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
                            marginVertical: 4
                        }}>
                            <View>
                                <Text style={{ color: 'black', fontWeight: '600', fontSize: 18 }}>{props.member.timetocontact}</Text>
                            </View>
                            <Button
                                onPress={()=>Linking.openURL(`tel:${parseInt(props.member.mobile)}`)}
                                style={{ padding: 2, backgroundColor: '#cce0ff', borderRadius: 6 }}
                            >Contact</Button>
                        </View>
                    </View>
                    :
                    <Text>No data</Text>
            }
        </View>
  )
}
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        width: '95%',
        backgroundColor: Colors.secondary,
        borderRadius: 10,
        shadowColor: 'blue',
        // shadowOffset: {
        //     width: 0,
        //     height: 10
        // },
        // shadowRadius: 5,
        // shadowOpacity: 1.0,
        elevation: 3,
        zIndex: 3,
        marginVertical: 10,
        padding: 15
    },
})