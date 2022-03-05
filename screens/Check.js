import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';

export default function Check() {
  const loggedInState = useSelector(state => state.loggedIn)
  const mobile = useSelector(state => state.mobile)
  return (
    <View>
      <Text style={{ color: 'black', fontSize: 30 }}>{loggedInState ? 'true' : 'false'}</Text>
      <Text style={{ color: 'black', fontSize: 30 }}>{mobile}</Text>
    </View>
  )
}