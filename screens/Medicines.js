import { View, Text, SafeAreaView, ScrollView, TextInput, ActivityIndicator, RefreshControl, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import LogoAndProfile from '../components/LogoAndProfile'
import { useState, useEffect } from 'react';
import { Colors } from '../Colors';
import firestore from '@react-native-firebase/firestore'
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");
const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}
export default function Medicines(props) {
    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        fetchData()
        wait(2000).then(() => setRefreshing(false));
    }, []);

    const [search, setSearch] = useState('')
    const [medicines, setMedicines] = useState([]);
    const [filteredMedicines, setFilteredMedicines] = useState([]);
    const fetchData = async () => {
        // console.log(props.route);
        const querysnapshot = await firestore().collection('medicines').get();
        const allMedicines = querysnapshot.docs.map(docsnap => docsnap.data());
        // setMedicines(allMedicines)
        try {
            if (querysnapshot.docs[0]._exists) {
                // console.log(allMedicines)
                setMedicines(allMedicines)
                setFilteredMedicines(allMedicines)
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
        console.log(props);
    }
        , [])
    useEffect(() => {
        var filteredMedicines = medicines.filter(function (el) {
            // console.log(el.city);
            return (
                el.title.toLowerCase().includes(search.toLowerCase().trim())
            );
        });
        setFilteredMedicines(filteredMedicines);
        console.log('object');
    }, [search]);
    const MedicineCard = ({ medicine }) => {
        return <TouchableOpacity
            onPress={() => props.navigation.navigate('medicine', {
                medicine: medicine
            })}
            style={styles.card}
        ><>
                <Image source={{ uri: medicine.image }} style={{ width: '95%', height: '85%' }} />
                <Text style={{ color: Colors.primary, fontSize: 25, flexShrink: 1 }}>{medicine.title}</Text></>
        </TouchableOpacity>
    }
    return (
        <SafeAreaView style={styles.container}
        // keyboardShouldPersistTaps='always'
        >
            <ScrollView refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            } contentContainerStyle={{
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
                    onChangeText={(e) => { setSearch(e) }}
                    placeholder="enter medicine or disease name..."
                    placeholderTextColor={Colors.textcolor}
                />
                {filteredMedicines && filteredMedicines.length > 0 ?
                    filteredMedicines.map(medicine => {
                        console.log(medicine);
                        return <MedicineCard medicine={medicine} key={medicine.title} />
                    }) : <ActivityIndicator size='large' />
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
    card: {
        backgroundColor: '#f5f9ff',
        borderRadius: 10,
        shadowColor: 'blue',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 3,
        zIndex: 3,
        padding: 8,
        width: width * 0.95,
        height: height * 0.3,
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

// const styles = StyleSheet.create({
// })