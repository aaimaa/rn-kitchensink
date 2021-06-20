import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button ,Icon,Header, Container,Left,Right,Body,Content} from "native-base";
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/core";
const Buttons = () => {
    const navigation=useNavigation();
  return (
    <Container>
    <Header style={{backgroundColor:'#CAD5E2'}} androidStatusBarColor="#CAD5E2">
      <Left>
            <Button transparent>
            <Entypo name="menu" size={24} color="green" onPress={()=>navigation.openDrawer()} />
              </Button>
            </Left>
            <Body
              style={{
                flex: 3,
                flexDirection: 'row',
                justifyContent: 'flex-start',
               
              }}
            >
              <Text style={{fontWeight:'bold',color:'green',fontSize:20}}>Buttons</Text>
            </Body>
            <Right />
      </Header>
      <Button full success style={{margin:20}}>
        <Text>Click here</Text>
      </Button>
      <Button full warning bordered style={{margin:20}}>
        <Text>Click here</Text>
      </Button>
      <Button full  transparent style={{margin:20}}>
        <Text>Click here</Text>
      </Button>
      <Button full danger block style={{margin:20}}>
        <Text>Click here</Text>
      </Button>
      <Button full info rounded style={{margin:20}}>
        <Text>Click here</Text>
      </Button>
      <Button iconRight light full style={{margin:20}}>
            <Text>Next</Text>
            <Icon name='home' />
          </Button>
    </Container>
  );
};

export default Buttons;

const styles = StyleSheet.create({});
