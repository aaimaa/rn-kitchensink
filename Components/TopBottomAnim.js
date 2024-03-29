import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Container, Content,Card,CardItem,Header,Body,Left,Right,Icon,Button } from "native-base";
import { useNavigation } from "@react-navigation/core";
import { Entypo } from '@expo/vector-icons';
import Modal from "react-native-modal";
const TopBottomAnim = () => {
const navigation=useNavigation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <Container>
               <Header
        style={{ backgroundColor: "#CAD5E2" }}
        androidStatusBarColor="#CAD5E2"
      >
        <Left>
          <Button transparent>
            <Entypo
              name="menu"
              size={24}
              color="green"
              onPress={() => navigation.openDrawer()}
            />
          </Button>
        </Left>
        <Body
          style={{
            flex: 3,
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
          <Text style={{ fontWeight: "bold", color: "green", fontSize: 20 }}>
            TopBottomAnim
          </Text>
        </Body>
        <Right />
      </Header>
      <Button full onPress={() => setIsModalVisible(true)}  success style={{marginTop:100,alignSelf:'center',width:'100%'}}>
        <Text>Show Screen</Text>
      </Button>
      <Modal
        isVisible={isModalVisible}
        animationIn="slideInDown"
        onBackButtonPress={() => setIsModalVisible(false)}
        style={{ margin: 0, backgroundColor: "green" }}
      >
          <Entypo name="cross" size={24} color="black" onPress={()=>setIsModalVisible(false)} style={{position:'absolute',top:20,right:20}}/>
      </Modal>
    </Container>
  );
};

export default TopBottomAnim;
const styles = StyleSheet.create({});
