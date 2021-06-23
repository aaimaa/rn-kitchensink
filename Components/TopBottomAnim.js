import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Container, Button } from "native-base";
import { Entypo } from '@expo/vector-icons';
import Modal from "react-native-modal";
const TopBottomAnim = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <Container>
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
