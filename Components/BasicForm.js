import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Input, Item, Container, Content, Button } from "native-base";
const BasicForm = () => {
  return (
    <Container>
      <Content
        contentContainerStyle={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <View style={{ flexDirection: "row", width: "100%" }}>
          <View style={{ flexDirection: "column", width: "40%", margin: 12 }}>
            <Text style={{ fontSize: 20 }}>First Name</Text>
            <Item
              regular
              style={{ margin: 20, borderRadius: 6, width: "100%" }}
            >
              <Input placeholder="e.g. John" placeholderTextColor="darkgray" />
            </Item>
          </View>
          <View style={{ width: "100%", margin: 12 }}>
            <Text style={{ fontSize: 20, alignSelf: "flex-start" }}>
              Last Name
            </Text>
            <Item regular style={{ margin: 20, borderRadius: 6, width: "40%" }}>
              <Input placeholder="e.g. Doe" placeholderTextColor="darkgray" />
            </Item>
          </View>
        </View>
        <View>
          <Text
            style={{ fontSize: 20, alignSelf: "flex-start", marginLeft: 8 }}
          >
            Email
          </Text>
          <Item
            regular
            style={{
              margin: 20,
              borderRadius: 6,
              width: "90%",
              alignSelf: "center",
            }}
          >
            <Input placeholder="Email" placeholderTextColor="darkgray" />
          </Item>
        </View>

        <View>
          <Text
            style={{ fontSize: 20, alignSelf: "flex-start", marginLeft: 8 }}
          >
            Account Number
          </Text>
          <Item
            regular
            style={{
              margin: 20,
              borderRadius: 6,
              width: "90%",
              alignSelf: "center",
            }}
          >
            <Input placeholder="e.g. 1234567" placeholderTextColor="darkgray" />
          </Item>
        </View>
        <View>
          <Text
            style={{ fontSize: 20, alignSelf: "flex-start", marginLeft: 8 }}
          >
            Re-Enter Account Number
          </Text>
          <Item
            regular
            style={{
              margin: 20,
              borderRadius: 6,
              width: "90%",
              alignSelf: "center",
            }}
          >
            <Input placeholder="e.g. 1234567" placeholderTextColor="darkgray" />
          </Item>
        </View>
        <View>
          <Text
            style={{ fontSize: 20, alignSelf: "flex-start", marginLeft: 8 }}
          >
            IFSC Code
          </Text>
          <Item
            regular
            style={{
              margin: 20,
              borderRadius: 6,
              width: "90%",
              alignSelf: "center",
            }}
          >
            <Input
              placeholder="e.g. HDFC12345"
              placeholderTextColor="darkgray"
            />
          </Item>
        </View>
        <Button full style={{ backgroundColor: "#1C8D73" }}>
          <Text style={{ fontWeight: "bold", color: "white", fontSize: 16 }}>
            Save
          </Text>
        </Button>
      </Content>
    </Container>
  );
};

export default BasicForm;

const styles = StyleSheet.create({});
