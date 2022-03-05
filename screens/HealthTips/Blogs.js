import { Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native';
import { Colors } from '../../Colors';
import { useEffect } from 'react';
import { useState } from 'react';
import firestore from '@react-native-firebase/firestore'

  const { width, height } = Dimensions.get("window");
export default function Blogs({ navigation }) {

  const [blogs, setBlogs] = useState()

  const fetchblogs = async () => {
    const querysnapshot = await firestore().collection('articles').get();
    const allblogs = querysnapshot.docs.map(docsnap => docsnap.data());
    try {
      if (querysnapshot.docs[0]._exists) {
        // console.log(allDoctors)
        setBlogs(allblogs)
      } else {
        console.log("No such document!");
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchblogs();
  }, [])

  const BlogCard = ({ blog }) => {
    return <TouchableOpacity
      onPress={() => navigation.navigate('blog', {
        blog: blog
      })}
      style={styles.card}
    ><>
      <Image source={{uri:blog.mainImage}} style={{width:'95%', height:'85%'}} />
        <Text style={{ color: Colors.primary, fontSize: 30 }}>{blog.title}</Text></>
    </TouchableOpacity>
  }
  return (
    <ScrollView
    contentContainerStyle={{width:width, height:'100%', justifyContent:'center', alignItems:'center'}}
    >
      {blogs?
        blogs.map(blog => {
          return <BlogCard blog={blog} key={blog}/>
        }):<Text style={{color:'black'}}>no data Blogs.js</Text>
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f5f9ff',
    borderRadius: 10,
    shadowColor: 'blue',
    shadowOffset: {
        width: 0,
        height: 10
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 3,
    zIndex: 3,
    padding: 8,
    width: width * 0.95,
    height: height * 0.3,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
})