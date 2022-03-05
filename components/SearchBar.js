import { View, Text, TextInput, ScrollView, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../Colors';
import SearchResults from './SearchResults';
// import { TextInput } from 'react-native-paper';

export default function SearchBar({ navigation }) {
    const [search, setSearch] = useState('');
    return (
        <View style={{
            flex: 1, width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginVertical: 10, position: 'relative'
        }} >
            <TextInput
                style={{
                    width: '85%', height: 45, borderRadius: 30, backgroundColor: Colors.secondary, margin: 'auto', color: Colors.textcolor, paddingHorizontal: 20,
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
            <View style={{ zIndex: 6, elevation: 6, position: 'absolute', top: 45, width: '85%', backgroundColor: Colors.secondary }}>
                {search ?
                    <ScrollView>
                        <SearchResults navigation={navigation} search={search} />
                    </ScrollView> :
                    <View style={{ display: 'none' }}></View>}
            </View>
        </View>
    );
}
