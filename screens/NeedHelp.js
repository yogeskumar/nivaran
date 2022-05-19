import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';
import { Colors } from '../Colors';
import FooterButtons from './../components/FooterButtons'
import LogoAndProfile from '../components/LogoAndProfile';
import { useEffect } from 'react';
import { useState } from 'react';
import { Team } from '../teamData';
import ContactCard from '../components/ContactCard';


export default function NeedHelp(props) {
  const team = [
    { "name": "Yogesh Kumar", "role": "React Native Developer", "image": require("./../images/yogesh.png"), "timetocontact": "10 AM to 9 PM", "gender": "Male", "mobile": "8218629990", "address": "Balkeshwar Agra", },
    { "name": "Yash Maheshwari", "role": "UI/UX Developer", "image": require("./../images/yash.jpeg"), "timetocontact": "10 AM to 9 PM", "gender": "Male", "mobile": "9634311567", "address": "TYC Agra", },
    { "name": "Bhupendra Vaishnav", "role": "DataBase/Firebase", "image": require("./../images/bhupendra.jpeg"), "timetocontact": "10 AM to 9 PM", "gender": "Male", "mobile": "9837839231", "address": "Parvatpur Agra", },
  ];
  return (
    <SafeAreaView>
      <View style={{
        width: '100%', height: '100%',
        backgroundColor: Colors.background, justifyContent: 'space-between'
      }}>
        <ScrollView contentContainerStyle={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <LogoAndProfile navigation={props.navigation} />
          <Text style={{ flex: 1, justifyContent: 'center', alignItems: 'center', fontSize: 30, color: Colors.textcolor, width: '100%', height: '100%', textAlign: 'center' }}>Need help, contact us</Text>
          {
            team ? team.map(member => {
              return <ContactCard key={member.name} member={member} />
            }) : <Text>No data</Text>
          }
        </ScrollView>
        <FooterButtons navigation={props.navigation} />
      </View>
    </SafeAreaView>
  );
}
