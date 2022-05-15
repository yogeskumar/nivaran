import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react';
import { Colors } from './../Colors'
import { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Button } from 'react-native-paper';
import { Linking } from 'react-native'

export default function DoctorCard(props) {

    const [doctor] = useState(props.item)

    return (
        <View style={styles.container}>
            {
                doctor ?
                    <View>

                        {
                            doctor.image === "not available" ?
                                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <MaterialIcons
                                        name='account-circle'
                                        size={42}
                                        color={Colors.primary}
                                        style={{ marginRight: 15 }}
                                    />
                                    <View>
                                        <Text style={{ color: 'black', fontSize: 14, fontWeight: '700' }}>{doctor.name}</Text>
                                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                            <Text style={{ color: '#a3a3a3', fontSize: 13 }}>{doctor.age === 'notavailable' | 'not available' ? 'age not available ' : doctor.age + 'yrs'} </Text>
                                            <Text style={{ color: '#a3a3a3', fontSize: 13 }}>{doctor.gender}</Text>
                                        </View>
                                    </View>
                                </View>
                                :
                                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                    {/* <Image /> */}
                                    <View>
                                        <Text style={{ color: 'black', fontSize: 14, fontWeight: '700' }}>{doctor.name}</Text>
                                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                            <Text style={{ color: '#a3a3a3', fontSize: 13 }}>{doctor.age === 'notavailable' | 'not available' ? 'age not available ' : (doctor.age + 'yrs')} </Text>
                                            <Text style={{ color: '#a3a3a3', fontSize: 13 }}>{doctor.gender}</Text>
                                        </View>
                                    </View>
                                </View>
                        }

                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 3, marginVertical: 6 }}>
                            <View style={{ width: '30%' }}>
                                <Text selectable={true} style={{ color: 'black', fontWeight: '600', fontSize: 14 }}>{doctor.mobile}</Text>
                                <Text style={{ color: Colors.primary, fontWeight: '900', fontSize: 12 }}>Contact Number</Text>
                            </View>
                            <View style={{ width: '68%', justifyContent: 'center', alignItems: 'flex-end' }}>
                                <Text selectable={true} style={{ color: 'black', fontWeight: '600', fontSize: doctor.address.length > 20 ? 10 : 18, maxWidth: '100%', overflow: 'hidden', textAlign: 'right' }}>{doctor.address}</Text>
                                <Text style={{ color: Colors.primary, fontWeight: '900', fontSize: 12, textAlign: 'right' }}>Address</Text>
                            </View>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={{ width: '60%' }}>
                                <Text style={{ color: 'black', fontWeight: '600', fontSize: doctor.timeofclinic.length > 20 ? 10 : 18, overflow: 'hidden' }}>{doctor.timeofclinic.split(",")[0]}</Text>
                                <Text style={{ color: 'black', fontWeight: '600', fontSize: doctor.timeofclinic.length > 20 ? 10 : 18, overflow: 'hidden', overflow: 'hidden' }}>{doctor.timeofclinic.split(",")[1]}</Text>
                            </View>
                            {
                                doctor.mobile == "not available" ?
                                    <Button
                                        onPress={() => alert('Contact number is not available')}
                                        style={{ padding: 2, backgroundColor: '#cce0ff', borderRadius: 6 }}>Consult
                                    </Button> :
                                    <Button
                                        onPress={() => Linking.openURL(`tel:${doctor.mobile}`)}
                                        style={{ padding: 2, backgroundColor: '#cce0ff', borderRadius: 6 }}>Consult
                                    </Button>
                            }
                        </View>
                    </View>
                    :
                    <Text>No data</Text>
            }
        </View>
    );
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
        padding: 15,
        // overflow: 'hidden'
    },
})