import { View, Text, SafeAreaView, ScrollView, TextInput, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import LogoAndProfile from '../components/LogoAndProfile'
import { useState, useEffect } from 'react';
import { Colors } from '../Colors';
// import { firebase } from '@react-native-firebase/firestore';
import firestore from '@react-native-firebase/firestore'
import DoctorCard from '../components/DoctorCard';
// import { Dimensions } from 'react-native';

export default function Medicines(props) {

    // const { width, height } = Dimensions.get("window");
    const [search, setSearch] = useState('')
    const [doctors, setDoctors] = useState([]);
    const [filteredDoctors, setFilteredDoctors] = useState([]);
    const fetchData = async () => {
        // console.log(props.route);
        const querysnapshot = await firestore().collection('doctors').get();
        const allDoctors = querysnapshot.docs.map(docsnap => docsnap.data());
        // setMedicines(allMedicines)
        try {
            if (querysnapshot.docs[0]._exists) {
                // console.log(allDoctors)
                setDoctors(allDoctors)
                setFilteredDoctors(allDoctors)
            } else {
                console.log("No such document!");
            }
        }
        catch (error) {
            alert('some problem occured')
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData()
    }
        , [])
    useEffect(() => {
        var filteredDoctors = doctors.filter(function (el) {
            // console.log(el.city);
            return (
                el.address.toLowerCase().includes(search.toLowerCase().trim()) ||
                el.name.toLowerCase().includes(search.toLowerCase().trim()) ||
                el.age.toLowerCase().includes(search.toLowerCase().trim())
            );
        });
        setFilteredDoctors(filteredDoctors);
        console.log('object');
    }, [search]);

    return (
        <SafeAreaView style={styles.container}
        // keyboardShouldPersistTaps='always'
        >
            <ScrollView contentContainerStyle={{
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <LogoAndProfile navigation={props.navigation} />
                <TextInput
                    style={{
                        width: '85%', height: 45, borderRadius: 20, backgroundColor: Colors.secondary, color: Colors.textcolor,
                        paddingHorizontal: 20,
                        shadowColor: 'black',
                        shadowOffset: {
                            width: 0,
                            height: 3
                        },
                        shadowRadius: 5,
                        shadowOpacity: 1.0,
                        elevation: 3,
                        zIndex: 3
                    }}
                    value={search}
                    onChangeText={(text) => { setSearch(text) }}
                    placeholder="enter city or doctor..."
                    placeholderTextColor={Colors.textcolor}
                />
                {
                    filteredDoctors && filteredDoctors.length > 0 ?
                        filteredDoctors.map(item => {
                            return <DoctorCard item={item} key={item.name} />
                        })
                        : <Text style={{ color: 'black' }}>No data to show</Text>
                }
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
})