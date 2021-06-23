import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { Container,Content } from 'native-base'
const ListItems = () => {
    return (
       <Container>
           <Content contentContainerStyle={{justifyContent:'center',alignItems:'center',flex:1}}>
           <View style={{flexDirection:'row',margin:12}}>
        <Image
          source={{ uri: 'https://www.titechglobal.com/wp-content/uploads/2018/08/react-native-banner.jpg' }}
          style={{
            width: 140,
            height: 140,
            marginTop:8,
          }}
        />
         <Text style={{ color: "black", fontSize: 17,flex:1,paddingTop:25,marginLeft:12 }}>Flutter Vs React Native Lets Compare</Text>
         </View>
           </Content>
       </Container>
    )
}

export default ListItems

const styles = StyleSheet.create({})
