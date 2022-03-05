import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import { Colors } from '../Colors';
import FooterButtons from './../components/FooterButtons'
import LogoAndProfile from '../components/LogoAndProfile';

export default function Bookings({ navigation }) {
    return (
        <SafeAreaView>
            <View style={{
                width: '100%', height: '100%',
                backgroundColor: Colors.background, justifyContent: 'space-between'
            }}>
                <ScrollView>
                    <LogoAndProfile />
                    <Text style={{ flex: 1, justifyContent: 'center', alignItems: 'center', fontSize: 30, color: Colors.textcolor, width: '100%', height: '100%' }}>Your bookings will be visible here</Text>
                </ScrollView>
                <FooterButtons navigation={navigation} />
            </View>
        </SafeAreaView>
    );
}
