import React from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import { Container, Content,Card,CardItem,Header,Body,Left,Right,Icon,Button } from "native-base";
import { useNavigation } from "@react-navigation/core";
import { Entypo } from '@expo/vector-icons';

const Banners = () => {
    const navigation=useNavigation();
  const data = [
    {
      imageUri:
        "https://www.qed42.com/sites/default/files/2018-11/react-native.png",
    },
    {
      imageUri:
        "https://www.qed42.com/sites/default/files/2018-11/react-native.png",
    },
    {
      imageUri:
        "https://www.qed42.com/sites/default/files/2018-11/react-native.png",
    },
  ];
  return (
    <Container style={{ flex: 1 }}>
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
            Banners
          </Text>
        </Body>
        <Right />
      </Header>
      <Content>
        <FlatList
          style={{ marginTop: 100 }}
          horizontal
          data={data}
          renderItem={({ item }) => (
            <Image
              source={require("../assets/pexels_1.jpg")}
              style={{
                width: 200,
                height: 200,
                borderRadius: 25,
                marginLeft: 12,
              }}
            />
          )}
          keyExtractor={(item) => item.imageUri}
        />
         <FlatList
          style={{ marginTop: 100 }}
          horizontal
          data={data}
          renderItem={({ item }) => (
          <Container style={{margin:12}}>
              <Card style={{borderRadius:8}}>
              <Image source={require('../assets/pexels_1.jpg')} style={{width:270,height:170,borderTopLeftRadius:8,borderTopRightRadius:8}}/>
                  <CardItem style={{borderRadius:12}}>
                      <Text>Title Of Image</Text>
                  </CardItem>
              </Card>
          </Container>
          )}
          keyExtractor={(item) => item.imageUri}
        />
      </Content>
    </Container>
  );
};

export default Banners;

const styles = StyleSheet.create({});
