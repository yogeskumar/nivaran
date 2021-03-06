import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Colors } from '../Colors';
import { Hospitals } from '../DataBase';
import { firebase } from '@react-native-firebase/firestore';

export default function SearchResults(props) {
    const [results, setResults] = useState([]);
    const fetchData = async () => {
        const search = props.search;
        const querysnapshot = await firebase.firestore().collection('hospitals').get();
        const allHospitals = querysnapshot.docs.map(docsnap => docsnap.data());
        var filteredHospitals = allHospitals.filter(function (el) {
            return (
                el.city.toLowerCase().includes(search.toLowerCase().trim()) ||
                el.hospitalname.toLowerCase().includes(search.toLowerCase().trim())
            );
        });
        setResults(filteredHospitals);
    }
    useEffect(() => {
        fetchData()
    }, [props.search])
    return (
        <View keyboardShouldPersistTaps='handled' styles={styles.container}>
            {results ? results.map(item => {
                return <TouchableOpacity keyboardShouldPersistTaps='handled'
                    key={item.hospitalname}
                    onPress={() => {
                        props.navigation.navigate('availablehospitals', { city: item.city })
                    }}
                >
                    <View style={styles.searchResults}>
                        <Text style={{ width: '70%', color: Colors.textcolor }}>{item.hospitalname}</Text>
                        <Text style={{ color: Colors.textcolor }}>{item.city}</Text>
                    </View>
                </TouchableOpacity>
            }) : <Text style={styles.searchResults}>No data...</Text>}
            {/* 
                    <FlatList
                        data={results}
                        renderItem={renderItem}
                        keyExtractor={item => item.hospitalname}
                        scrollEnabled={false}
                        // horizontal={true}
                        // contentContainerStyle={styles.citiesContainer}
                        showsHorizontalScrollIndicator={false}
                        showsHorizontalVerticalIndicator={false}
                    /> */}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        // width: '850%',
        // backgroundColor: Colors.secondary,
    },
    searchResults: {
        backgroundColor: Colors.secondary,
        marginVertical: 1,
        borderRadius: 5,
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    search: {
        color: Colors.primary,
    }
})
