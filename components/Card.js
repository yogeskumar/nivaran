import { View, Text, TouchableOpacity, Button, StyleSheet, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Hospitals } from '../DataBase';
import { Colors } from './../Colors'

export default function Card(props) {
  const [hospitalData, setHospitalData] = useState();
  useEffect(() => {
    const hospital = props.hospital;
    Hospitals.map(item => {
      if (item.hospitalname === hospital) {
        setHospitalData((old) => {
          return { ...old, item }
        })
      }
    })
  }, [])
  return (
    <View style={styles.container}>
      {
        hospitalData ?
          <View style={styles.card} >
            <Image style={styles.image} source={{ uri: hospitalData.item.image1url }} />
            <Text style={styles.name} >{hospitalData.item.hospitalname}</Text>
            <View style={styles.inRow}>
              <Text style={styles.leftSide} >State</Text>
              <Text style={styles.rightSide} >{hospitalData.item.state}</Text>
            </View>
            <View style={styles.inRow}>
              <Text style={styles.leftSide} >City</Text>
              <Text style={styles.rightSide} >{hospitalData.item.city}</Text>
            </View>
            <View style={styles.inRow}>
              <Text style={styles.leftSide} >Available Beds</Text>
              <Text style={styles.rightSide} >{hospitalData.item.availablebeds}</Text>
            </View>
            <View style={styles.inRow}>
              <Text style={styles.leftSide} >Rating</Text>
              <Text style={styles.rightSide}>{hospitalData.item.rating}</Text>
            </View>
            <TouchableOpacity
              onPress={() => { props.navigation.navigate('abouthospital', { hospital: hospitalData.item }) }}
              style={styles.button}>
              <Text style={styles.buttonText}>Contact Hospital</Text>
            </TouchableOpacity>
          </View> : <Text>No data</Text>}</View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 15,
  },
  image: {
    width: '100%',
    height: 250,
    borderTopLeftRadius: 10,
    borderTopRightRadius:10
  },
  card: {
    flex: 1,
    // borderWidth: 1,
    // borderColor: Colors.primary,
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center',
    // paddingTop: 5,
    backgroundColor:Colors.secondary,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 3,
    zIndex: 3,
    marginVertical:10
  },
  name: {
    margin: 10,
    fontSize: 25,
    fontWeight: '800',
    color: Colors.textcolor,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5
  },
  leftSide: {
    width: '50%',
    fontSize: 19,
    fontWeight: '900',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    paddingLeft: 35,
    color: Colors.textcolor,
    borderWidth: 0.5,
    borderColor: 'black'
  },
  rightSide: {
    width: '50%',
    fontSize: 18,
    fontWeight: '500',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    paddingLeft: 35,
    color: Colors.textcolor,
    borderWidth: 0.5,
    borderColor: 'black'
  },
  inRow: {
    display: 'flex',
    flexDirection: 'row'
  },
  button: {
    backgroundColor: Colors.primary,
    width: '100%',
    // height: 50,
    // marginVertical: 5,
    // paddingVertical: 15,
    // paddingHorizontal: 15,
    // borderRadius: 15,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 40,
    fontWeight:'900'
  }
})