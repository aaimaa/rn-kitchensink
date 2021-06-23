import React from 'react'
import { StyleSheet, Text, View ,SafeAreaView} from 'react-native'
import { WebView } from 'react-native-webview';
import { Container,Content,Header } from 'native-base';

const Webview = () => {
    return (
       
        <Container style={{flex:1,justifyContent:'center'}}>
            <Header/>
               <WebView source={{ uri: 'https://reactnative.dev/' }} />
        </Container>
        
    )
}

export default Webview

const styles = StyleSheet.create({})
