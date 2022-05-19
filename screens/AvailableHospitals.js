import { View, Text, FlatList, ScrollView, SafeAreaView, StyleSheet, StatusBar, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import FooterButtons from '../components/FooterButtons';
import { Hospitals } from './../DataBase'
import Card from '../components/Card';
import { Colors } from '../Colors';
import LogoAndProfile from '../components/LogoAndProfile';

export default function AvailableHospitals({ route, navigation }) {
    const [availableHospitals, setAvailableHospitals] = useState([]);
    useEffect(() => {
        Hospitals.map(item => {
            if (item.city === route.params.city) {
                setAvailableHospitals((old) => {
                    return [...old, item.hospitalname]
                })
            }
        })
    }, [])
    const renderItem = ({ item }) => (
        <Card navigation={navigation} hospital={item} />
    );
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {
                    availableHospitals ? availableHospitals.map(item => {
                        return <Card key={item} navigation={navigation} hospital={item} />
                    }) : <ActivityIndicator size='large' />
                }
                {/* <FlatList
                    data={availableHospitals}
                    renderItem={renderItem}
                    keyExtractor={item => item}
                /> */}
            </ScrollView>
            <FooterButtons navigation={navigation} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        backgroundColor: Colors.background,
        marginTop: StatusBar.currentHeight || 0,
    }
})