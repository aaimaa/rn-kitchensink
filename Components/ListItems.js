import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { Container,Content,Body,Card,CardItem ,ListItem,Left,Right} from 'native-base'
import { MaterialIcons } from '@expo/vector-icons'
const ListItems = () => {
    return (
       <Container>
           <Content contentContainerStyle={{justifyContent:'center',alignItems:'center',flex:1}}>
           <View style={{flexDirection:'row',margin:12}}>
             {/* Basic Youtube List item */}
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
           <View style={{ margin: 8, borderRadius: 12, flex: 1 }}>
             {/* Detailed Youtube List Item */}
           <Card style={{ borderRadius: 12 }}>
          <CardItem cardBody>
            <Image
              source={{ uri: 'https://www.qed42.com/sites/default/files/2018-11/react-native.png' }}
              style={{ height: 200, width: null, flex: 1 }}
            />
          </CardItem>
          <Body>
            <Text style={{ marginLeft: 5, padding: 5, fontWeight: "700" }}>
              React Native:Basics and Introduction
            </Text>
          </Body>
        </Card>
      </View>
      <ListItem>
        {/* Chat List item */}
            <Left>
              <Image source={{ uri: 'https://www.w3schools.com/howto/img_avatar.png'}} style={{ width: 50, height: 50 }} />
            </Left>
            <View style={{position:'absolute',left:70}}>
            <Body>
              <Text style={{fontWeight:'bold'}}>Basic Item</Text>
            </Body>
            </View>
           <Right>
           <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
           </Right>
          </ListItem>
       </Container>
    )
}

export default ListItems

const styles = StyleSheet.create({})
