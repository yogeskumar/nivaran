import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react';
import { Colors } from './../Colors'
import { useState } from 'react';

export default function MedicineCard(props) {
    const [medicine] = useState(props.item)
    // const medicine = props.item;
    return (
        <View style={styles.container}>
            {
                medicine ?
                    <View style={styles.card} >
                    {console.log('medicine')}
                        <Image style={styles.image} source={{ uri: medicine.image }} />
                        <Text selectable={true} style={styles.name} >{medicine.name}</Text>
                        <View style={{width:'100%', height:0.5, backgroundColor:'black', marginBottom:0}}></View>
                        <View style={{
                            // flex: 1,
                            width: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 5,
                            backgroundColor: Colors.secondary,
                            borderRadius: 1,
                            shadowColor: 'blue',
                            shadowOffset: {
                                width: 0,
                                height: 10
                            },
                            shadowRadius: 5,
                            shadowOpacity: 1.0,
                            elevation: 3,
                            zIndex: 3,
                            marginVertical:0}}>
                            <Text selectable={true} style={styles.heading} >Overview</Text>
                            <Text selectable={true} style={styles.text} >{medicine.overview}</Text>
                        </View>
                        <View style={styles.innerCard}>
                            <Text selectable={true} style={styles.heading} >Uses and benefits</Text>
                            <Text selectable={true} style={styles.text} >{medicine.usesandbenefits}</Text>
                        </View>
                        <View style={styles.innerCard}>
                            <Text selectable={true} style={styles.heading} >Side effects</Text>
                            <Text selectable={true} style={styles.text} >{medicine.sideeffects}</Text>
                        </View>
                        <View style={styles.innerCard}>
                            <Text selectable={true} style={styles.heading} >How to use</Text>
                            <Text selectable={true} style={styles.text}>{medicine.howtouse}</Text>
                        </View>
                        <View style={styles.innerCard}>
                            <Text selectable={true} style={styles.heading} >How it works</Text>
                            <Text selectable={true} style={styles.text}>{medicine.howitworks}</Text>
                        </View>
                    </View> : <Text style={{color:'black'}}>No data</Text>}</View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 310,
        height: 200,
        // borderTopLeftRadius: 10,
        // borderTopRightRadius: 10
    },
    card: {
        // flex: 1,
        width: '95%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.secondary,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 3,
        zIndex: 3,
        marginVertical: 10,
        paddingBottom:0
    },
    name: {
        margin: 10,
        fontSize: 30,
        fontWeight: '800',
        color: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        fontSize: 21,
        fontWeight: '900',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 5,
        color: Colors.textcolor,
    },
    text: {
        fontSize: 14,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        color: 'black',
    },
    innerCard: {
        // flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding:5,
        backgroundColor: Colors.secondary,
        borderRadius: 1,
        shadowColor: 'blue',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 3,
        zIndex: 3,
        marginVertical: 10,
        marginBottom:0
    },
})