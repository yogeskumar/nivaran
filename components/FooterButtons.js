import { View, Text, Share, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react';
import { Colors } from '../Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default function FooterButtons({ navigation }) {
        const onShare = async () => {
            try {
                const result = await Share.share({
                    title: 'App link',
                    message: 'Please install this app and stay safe , AppLink :link here',
                    url: 'link here'
                });
                if (result.action === Share.sharedAction) {
                    if (result.activityType) {
                        // shared with activity type of result.activityType
                    } else {
                        // shared
                    }
                } else if (result.action === Share.dismissedAction) {
                    // dismissed
                }
            } catch (error) {
                alert(error.message);
            }
        };
    
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => { navigation.navigate('home') }}>
                <MaterialIcons
                    name='home'
                    size={40}
                    color={Colors.primary}
                    style={{ marginRight: 15 }}
                // onPress={()=>auth().signOut()}
                />
                {/* <Image style={styles.images} source={require('./../images/7.png')} /> */}
            </TouchableOpacity>
            {/* <TouchableOpacity
                onPress={() => { navigation.navigate('bookings') }}>
                <MaterialIcons
                    name='shopping-bag'
                    size={40}
                    color={Colors.primary}
                    style={{ marginRight: 15 }}
                // onPress={()=>auth().signOut()}
                />
                <Image style={styles.images} source={require('./../images/6.png')} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => { navigation.navigate('allchat') }}>
                <MaterialIcons
                    name='chat'
                    size={40}
                    color={Colors.primary}
                    style={{ marginRight: 15 }}
                // onPress={()=>auth().signOut()}
                />
                <Image style={styles.images} source={require('./../images/6.png')} />
            </TouchableOpacity> */}
            {/* <TouchableOpacity
                onPress={() => { navigation.navigate('share') }}>
                <Image style={styles.images} source={require('./../images/5.png')} />
            </TouchableOpacity> */}
            <TouchableOpacity
                onPress={() => { navigation.navigate('needhelp') }}>
                <MaterialIcons
                    name='info'
                    size={40}
                    color={Colors.primary}
                    style={{ marginRight: 15 }}
                // {/* // onPress={()=>auth().signOut()} */}
                 />
                {/* <Image style={styles.images} source={require('./../images/4.png')} /> */}
            </TouchableOpacity>
            <TouchableOpacity
                onPress={onShare}>
                <MaterialIcons
                    name='share'
                    size={40}
                    color={Colors.primary}
                    style={{ marginRight: 15 }}
                // onPress={()=>auth().signOut()}
                />
                {/* <Image style={styles.images} source={require('./../images/5.png')} /> */}
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 40,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.background,
        height: 65,
        width: '100%'
    },
    images: {
        width: 50,
        height: 50
    }
})