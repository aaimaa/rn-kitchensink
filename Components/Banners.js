import React from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import { Container, Content,Card,CardItem } from "native-base";
const Banners = () => {
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
