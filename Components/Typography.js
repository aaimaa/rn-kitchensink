import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  H1,
  H2,
  H3,
  Container,
  Content,
  Header,
  Body,
  Left,
  Right,
  Icon,
  Button,
} from "native-base";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
const Typography = () => {
  const navigation = useNavigation();
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
            Typography
          </Text>
        </Body>
        <Right />
      </Header>
      <Content>
        <H1>Heading 1</H1>
        <H2>Heading 2</H2>
        <H3>Heading 3</H3>
      </Content>
    </Container>
  );
};

export default Typography;

const styles = StyleSheet.create({});
