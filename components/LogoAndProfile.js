import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react';
import { Colors } from '../Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useSelector } from 'react-redux';
import { Dimensions } from 'react-native';

export default function LogoAndProfile({ navigation, route }) {
    const loggedInState = useSelector(state => state.loggedIn)
    const { width, height } = Dimensions.get("window");
    return (
        <View style={{
            flex: 1, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: '2%', paddingVertical: 0, marginVertical: 10, marginTop: 0, width: width
        }}>
            <Text style={{ fontSize: 45, fontWeight: '900', color: Colors.textcolor, marginLeft: 15 }}>Nivaran</Text>
            <TouchableOpacity onPress={() => {
                alert('this featue will be available soon')
                // if (loggedInState) {
                // navigation.navigate('profile')
                // }
                // else {
                //     navigation.navigate('login', { previousScreen:'home', route:route})
                // }
            }}>
                <MaterialIcons
                    name='account-circle'
                    size={42}
                    color={Colors.primary}
                    style={{ marginRight: 15 }}
                // onPress={()=>auth().signOut()}
                /></TouchableOpacity>
        </View>
    )
}