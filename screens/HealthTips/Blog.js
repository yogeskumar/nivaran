import React from 'react'
import { WebView } from 'react-native-webview';


export default function Blog({ route }) {
  return <WebView source={{ uri: route.params.blog.link }} />
}