import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import {
  Container,
  Content,
  Button,
  Left,
  Right,
  Body,
  Header,
} from "native-base";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

const Carousel = () => {
  const images = [
    "https://media.istockphoto.com/photos/smartphone-media-technology-and-social-network-concept-picture-id1050217124?k=6&m=1050217124&s=612x612&w=0&h=-2tflGsDvA9LL6P-es4EYfln9FE2EE1geuv5b3aWNkw=",
    "https://www.thedroidsonroids.com/wp-content/uploads/2019/05/flutter_blog-v.2-1200x640.png",
    "https://techcrunch.com/wp-content/uploads/2021/03/flutter2.png?w=730&crop=1",
  ];
  const navigation=useNavigation();
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
            Carousel
          </Text>
        </Body>
        <Right />
      </Header>
      <Content>
        <SliderBox images={images} />
      </Content>
    </Container>
  );
};

export default Carousel;

const styles = StyleSheet.create({});
