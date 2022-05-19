import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Colors } from '../Colors';

export default function OtherCards(props) {
    return (
        <View style={styles.container}>
            {/* Card2 staying healthy tips*/}
            <TouchableOpacity
                activeOpacity={.8}
                onPress={() => props.navigation.navigate('healthtips', {
                    navigation: JSON.stringify(props.navigation),
                })}
            >
                <View style={styles.cards} >
                    <Text style={styles.cardsText}>Tips to stay{"\n"}healthy</Text>
                    <Image style={styles.cardImg} source={require('./../images/healthcare.png')} />
                </View>
            </TouchableOpacity>
            {/* Card1 Consult a doctor now*/}
            <TouchableOpacity
                activeOpacity={.8}
                onPress={() => props.navigation.navigate('doctors', {
                    navigation: JSON.stringify(props.navigation),
                })}
            >
                <View style={styles.cards} >
                    <Image style={styles.cardImg} source={require('./../images/doctor.png')} />
                    <Text style={styles.cardsText} >Consult a{"\n"}doctor now</Text>
                </View>
            </TouchableOpacity>
            {/* Card3 medicines and their uses*/}
            <TouchableOpacity
                activeOpacity={.8}
                onPress={() => props.navigation.navigate('medicines', {
                    navigation: JSON.stringify(props.navigation)
                })}
            >
                <View style={styles.cards} >
                    <Image style={styles.cardImg} source={require('./../images/medicine.png')} />
                    <Text style={styles.cardsText} >Medicine and{"\n"}their uses</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        // display: 'flex',
        // flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cards: {
        marginVertical: 15,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: Colors.secondary,
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 10,
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 170,
        width: 350,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowRadius: 1,
        shadowOpacity: 1.0,
        elevation: 3,
        zIndex: 3
    },
    cardsText: {
        fontSize: 30,
        // textAlign: 'center',
        color: Colors.textcolor,
    },
    cardImg: {
        width: 130,
        height: 130
    }
})