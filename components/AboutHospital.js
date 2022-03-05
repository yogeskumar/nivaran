import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';
import React from 'react';
import FooterButtons from './FooterButtons';
import LogoAndProfile from './LogoAndProfile';
import { Colors } from '../Colors';
import { Linking } from 'react-native'
export default function AboutHospital(props) {
    const hospital = props.route.params.hospital;
    return (
        <SafeAreaView
            style={styles.container}
        >
            <ScrollView>
            {/* <LogoAndProfile/> */}
            <LogoAndProfile navigation={props.navigation} route={props.route} />
            </ScrollView>
            {/* part where actual data to be shown */}
            <ScrollView contentContainerStyle={{
                width: '100%',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                // backgroundColor: 'red'
            }}>
                <View style={styles.imageAndText}>
                    <Image style={styles.image} source={{ uri: hospital.image1url }} />
                    <Text style={styles.name}>{hospital.hospitalname}</Text>
                </View>
                {/* <View style={{ height: 3, width: '100%', backgroundColor: 'black', marginVertical: 10 }}><Text style={{color:'black'}}>-------------------------------------------------------------------------------------------------------------------</Text></View> */}
                <ScrollView contentContainerStyle={{
                    marginTop: 10,
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    // paddingRight: 150
                }}>
                    <View style={styles.about}>
                        <Text style={{ fontSize: 15, textAlign: 'center', color: Colors.primary, }}>{hospital.about[0].toUpperCase() + hospital.about.slice(1)}</Text>
                    </View>
                    {/* table */}
                    <View style={styles.table}>
                        <View style={styles.row}>
                            <Text style={styles.leftSide}>Available Beds</Text>
                            <Text style={styles.rightSide}>{hospital.availablebeds}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.leftSide}>Contact No.</Text>
                            <Text style={styles.rightSide}>{hospital.mobilenumber}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.leftSide}>OverAll Rating</Text>
                            <Text style={styles.rightSide}>Available soon</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.leftSide}>Nurse Rating</Text>
                            <Text style={styles.rightSide}>Available soon</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.leftSide}>Doctor Rating</Text>
                            <Text style={styles.rightSide}>Available soon</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.leftSide}>CleanNess</Text>
                            <Text style={styles.rightSide}>Available soon</Text>
                        </View>
                    </View>
                    <View style={ styles.buttonsContainer}>
                    <TouchableOpacity
                            onPress={() => Linking.openURL(`tel:${hospital.mobilenumber}`)}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Contact Now</Text>
                    </TouchableOpacity></View>
                </ScrollView>
            </ScrollView>

            {/* footer buttons */}
            <FooterButtons navigation={props.navigation} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.background,
    },
    imageAndText: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 15,
        width: 375,
        alignItems: 'center',
        // overflow: 'hidden',
        paddingVertical: 10,
        height: 200,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 3,
        zIndex: 3,
        backgroundColor: Colors.secondary,
        // borderRadius:10
    },
    image: {
        width: '45%',
        height: 150,
        borderRadius:5
    },
    name: {
        fontSize: 35,
        fontWeight: '900',
        textAlign: 'center',
        width: '45%',
        color: Colors.primary,
        marginLeft:30,
        // marginRight: 10
    },
    about: {
        backgroundColor: Colors.secondary,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 3,
        zIndex: 3,
        borderRadius: 10
    },
    table: {
        width: '96%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        shadowColor: 'black',
        padding: 5,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 3,
        zIndex: 3,
        borderRadius: 10,
        backgroundColor:Colors.secondary
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom:2,
        // width:'96%'
    },
    leftSide: {
        fontSize: 25,
        fontWeight:'900',
        color: Colors.textcolor,
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:Colors.background
        // borderWidth: 1
    },
    rightSide: {
        color: Colors.primary,
        backgroundColor: Colors.secondary,
        fontSize: 25,
        textAlign: 'left',
        justifyContent: 'center',
        alignItems: 'center',
        width: '48%',
        backgroundColor: Colors.background,
        // borderWidth: 1
        // horizontalScroll:'true'
    },
    buttonsContainer: {
        // width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },
    button: {
        backgroundColor: Colors.primary,
        // width: '45%',
        // height: 50,
        marginVertical: 5,
        marginHorizontal:10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 30,
        fontWeight:'700'
    }
})