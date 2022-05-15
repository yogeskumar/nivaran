import { View, Text, StatusBar, SafeAreaView, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Colors } from './../Colors';
import { Hospitals } from './../DataBase';
import OtherCards from '../components/OtherCards';
import FooterButtons from '../components/FooterButtons';
import SearchBar from '../components/SearchBar';
import LogoAndProfile from '../components/LogoAndProfile';
import { firebase } from '@react-native-firebase/firestore';



export default function Home({ navigation, route }) {

    const [cities, setCities] = useState(null);

    const fetchData = async () => {
        // console.log(props.route);
        const querysnapshot = await firebase.firestore().collection('hospitals').get();
        const allHospitals = querysnapshot.docs.map(docsnap => docsnap.data());
        // setMedicines(allMedicines)
        try {
            if (querysnapshot.docs[0]._exists) {
                console.log(allHospitals)
                const allCities = []
                allHospitals.map(item => {
                    allCities.push(item.city)
                })
                var uniqueCities = [...new Set(allCities)];
                var uniqueCities = Array.from(uniqueCities);;
                setCities(uniqueCities);
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

    // useEffect(() => {
    //     const allCities = []
    //     Hospitals.map(item => {
    //         allCities.push(item.city)
    //     })
    //     var uniqueCities = [...new Set(allCities)];
    //     var uniqueCities = Array.from(uniqueCities);;
    //     setCities(uniqueCities);
    // }, [])

    const renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => {
                // setSearchValue(item)
                navigation.navigate('availablehospitals', {
                    city: item,
                })
            }
            }

        >
            <Text style={styles.cities} >
                {item}
            </Text>
        </TouchableOpacity>
    );
    return (
        <SafeAreaView
            // behavior='position'
            // keyboardShouldPersistTaps='always'
            showsVerticalScrollIndicator={true}
            // showsHorizontalScrollIndicator={false}
            style={styles.container}
        >
            <ScrollView>
                <View style={{
                    width: '100%', height: '100%',
                    backgroundColor: Colors.background,
                    marginBottom: 50
                }}>
                    {/* Nivaran text and profile icon and search bar */}
                    <View style={{
                        width: '100%',
                        // height: '20%',
                    }} >
                        {/* Nivaran text and profile icon */}
                        <LogoAndProfile navigation={navigation} route={route} />
                        {/* search bar */}
                        <SearchBar navigation={navigation} />
                    </View>
                    {/* CitiesList */}
                    <View>
                        <FlatList
                            data={cities}
                            renderItem={renderItem}
                            keyExtractor={item => item}
                            horizontal={true}
                            contentContainerStyle={styles.citiesContainer}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                    {/* otherCards */}
                    <OtherCards navigation={navigation} route={route} />
                </View>
            </ScrollView>
            {/* footer buttons */}
            <FooterButtons navigation={navigation} />
        </SafeAreaView >

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        // marginTop: StatusBar.currentHeight || 0,
    },
    // item: {
    //     backgroundColor: '#f9c2ff',
    //     padding: 20,
    //     marginVertical: 8,
    //     marginHorizontal: 16,
    // },
    title: {
        fontSize: 32,
    },
    searchbar: {
        marginVertical: 50,
        backgroundColor: 'red'
    },
    citiesContainer: {
        height: 85,
        justifyContent: 'center', //Centered horizontally
        alignItems: 'center',
    },
    cities: {
        // flex: 1,
        fontSize: 12,
        textAlignVertical: 'center',
        textAlign: 'center',
        // flex: 1,
        fontWeight: '900',
        color: Colors.textcolor,
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: Colors.secondary,
        marginHorizontal: 10,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 3,
        zIndex: 3
        // margin: 'auto'
    }
});