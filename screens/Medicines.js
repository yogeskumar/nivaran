import { View, Text, SafeAreaView, ScrollView, TextInput, FlatList, StyleSheet} from 'react-native'
import React from 'react'
import LogoAndProfile from '../components/LogoAndProfile'
import { useState, useEffect } from 'react';
import { Colors } from '../Colors';
// import { firebase } from '@react-native-firebase/firestore';
import firestore from '@react-native-firebase/firestore'
import MedicineCard from '../components/MedicineCard';
// import { Dimensions } from 'react-native';

export default function Medicines(props) {

    // const { width, height } = Dimensions.get("window");
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
        fetchData()}
        , [])
    useEffect(() => {
        var filteredMedicines = medicines.filter(function (el) {
            // console.log(el.city);
            return (
                el.name.toLowerCase().includes(search.toLowerCase().trim())
            );
        });
        setFilteredMedicines(filteredMedicines);
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
                    onChangeText={(e) => { setSearch(e) }}
                    placeholder="enter city or hospital..."
                    placeholderTextColor={Colors.textcolor}
                />
            {
                    filteredMedicines && filteredMedicines.length>0?
                        filteredMedicines.map(item => {
                        return <MedicineCard item={item} key={item.name} />
                    })            
                    :<Text style={{color:'black'}}>No data to show</Text>
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