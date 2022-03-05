import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native';
import { Colors } from '../../Colors';

const { width, height } = Dimensions.get("window");

export default function Blog({ route }) {
  const keys = Object.keys(route.params.blog);
  // const values = Object.values(route.params.blog);
  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', padding:10 }}>
        <Image source={{ uri: route.params.blog.mainImage}} style={{ width: width*0.75, height: height*0.35 }} />
        <Text style={{ color: Colors.primary, fontSize: 30 }}>{route.params.blog.title}</Text>
      {
          keys.map(key => {
            if (key.includes("text")) {
              return <Text style={{color:'black', fontSize:18, marginVertical:5}} key={key}>{route.params.blog[key]}</Text>
            }
            if (key.includes("image")) {
              return <Image source={{ uri: route.params.blog[key] }} style={{ width: width * 0.65, height: height * 0.30 }} key={key}/>
            }
            if (key.includes("heading")) {
              return <Text style={{ color: 'black', fontSize: 25, marginVertical: 5 }} key={key}>{route.params.blog[key]}</Text>
            }
        })
        }
      </ScrollView>
    </SafeAreaView>
  )
}