import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import LogoAndProfile from '../../components/LogoAndProfile'
import { useState } from 'react';
import FooterButtons from '../../components/FooterButtons';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import Blogs from './Blogs';
import Videos from './Videos';
import { Colors } from '../../Colors';
import { Dimensions } from 'react-native';

export default function HealthTips(props) {
  const { width, height } = Dimensions.get("window");
  const [backgroundColor, setBackgroundColor] = useState('#fff');

  const [bgcLeft, setBgcLeft] = useState('#cce0ff')
  const [leftColor, setLeftColor] = useState('#1E74FD')
  const [bgcRight, setBgcRight] = useState(Colors.background)
  const [rightColor, setRightColor] = useState('#aaa')

  const [screen, setScreen] = useState(<Blogs navigation={props.navigation} />);

  function onSwipeLeft(gestureState) {
    setScreen(<Videos />)
    setBgcLeft(Colors.background)
    setLeftColor('#aaa')
    setBgcRight('#cce0ff')
    setRightColor('#1E74FD')
  }

  function onSwipeRight(gestureState) {
    setScreen(<Blogs navigation={props.navigation} />)
    setBgcLeft('#cce0ff')
    setLeftColor('#1E74FD')
    setBgcRight(Colors.background)
    setRightColor('#aaa')
  }
  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80
  };
  return (
    <SafeAreaView
      keyboardShouldPersistTaps='always'
      style={{ justifyContent: 'space-between', alignItems: 'center', flex: 1, backgroundColor: Colors.background }}
    >
      <ScrollView>
        {/* <LogoAndProfile navigation={props.navigation} route={props.route} /> */}
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <TouchableOpacity
            style={{ backgroundColor: bgcLeft, borderTopRightRadius: 35, width: '50%', paddingVertical: 10 }}
            onPress={() => {
              setScreen(<Blogs navigation={props.navigation} />)
              setBgcLeft('#cce0ff')
              setLeftColor('#1E74FD')
              setBgcRight(Colors.background)
              setRightColor('#aaa')
            }}
          >
            <Text style={{ color: leftColor, textAlign: 'center', fontSize: 20, fontWeight: '600' }}>Blogs</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ backgroundColor: bgcRight, borderTopLeftRadius: 35, width: '50%', paddingVertical: 10 }}
            onPress={() => {
              setScreen(<Videos />)
              setBgcLeft(Colors.background)
              setLeftColor('#aaa')
              setBgcRight('#cce0ff')
              setRightColor('#1E74FD')
            }}
          >
            <Text style={{ color: rightColor, textAlign: 'center', fontSize: 20, fontWeight: '600' }}>Videos</Text>
          </TouchableOpacity>
        </View>
        <GestureRecognizer
          onSwipeLeft={(state) => onSwipeLeft(state)}
          onSwipeRight={(state) => onSwipeRight(state)}
          config={config}
          style={{
            backgroundColor: backgroundColor
          }}
        >
          <ScrollView>
            {
              screen ? screen : <Text>No data</Text>
            }
          </ScrollView>
        </GestureRecognizer>
      </ScrollView>
      <FooterButtons navigation={props.navigation} />
    </SafeAreaView>
  )
}