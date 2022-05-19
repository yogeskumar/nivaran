import React from 'react';
import { WebView } from 'react-native-webview';

export default function Medicine({ route }) {
    return <WebView source={{ uri: route.params.medicine.link }} />
}