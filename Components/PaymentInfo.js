import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Container, Content, H2, Input, Item, Button } from "native-base";
const PaymentInfo = () => {
  return (
    <Container>
      {/* Debit/Credit Card Details Form */}
      <Content
        contentContainerStyle={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <H2>Card Details</H2>
        <View style={{ flexDirection: "row", width: "100%" }}>
          <View style={{ flexDirection: "column", width: "60%", margin: 12 }}>
            <Text style={{ fontSize: 20 }}>Owner</Text>
            <Item
              regular
              style={{ margin: 20, borderRadius: 6, width: "100%" }}
            >
              <Input placeholderTextColor="darkgray" />
            </Item>
          </View>
          <View style={{ width: "100%", margin: 12 }}>
            <Text style={{ fontSize: 20, alignSelf: "flex-start" }}>Cvv</Text>
            <Item regular style={{ margin: 20, borderRadius: 6, width: "20%" }}>
              <Input placeholderTextColor="darkgray" keyboardType={"numeric"} />
            </Item>
          </View>
        </View>
        <View style={{ width: "100%", margin: 12 }}>
          <Text
            style={{ fontSize: 20, alignSelf: "flex-start", marginLeft: 18 }}
          >
            Card Number
          </Text>
          <Item
            regular
            style={{
              margin: 20,
              borderRadius: 6,
              width: "80%",
              marginLeft: 18,
            }}
          >
            <Input placeholderTextColor="darkgray" keyboardType={"numeric"} />
          </Item>
        </View>
        <View style={{ width: "100%", margin: 12 }}>
          <View>
            <Text
              style={{ fontSize: 20, alignSelf: "flex-start", marginLeft: 18 }}
            >
              Expiry Date
            </Text>
            <Item
              regular
              style={{
                margin: 20,
                borderRadius: 6,
                width: "40%",
                marginLeft: 18,
              }}
            >
              <Input placeholderTextColor="darkgray" />
            </Item>
          </View>
          <View style={{ flexDirection: "row", marginLeft: 18 }}>
            <Image
              source={{
                uri: "https://img.icons8.com/color/48/000000/visa.png",
              }}
              style={{ width: 50, height: 50 }}
            />
            <Image
              source={{
                uri: "https://img.icons8.com/color/48/000000/mastercard.png",
              }}
              style={{ width: 50, height: 50 }}
            />
            <Image
              source={{
                uri: "https://img.icons8.com/fluent/48/000000/amex.png",
              }}
              style={{ width: 50, height: 50 }}
            />
          </View>
        </View>
        <Button full style={{ margin: 12 }}>
          <Text>Confirm</Text>
        </Button>
      </Content>
    </Container>
  );
};

export default PaymentInfo;

const styles = StyleSheet.create({});

{
  /* <img src="https://img.icons8.com/color/48/000000/visa.png"/> */
}
{
  /* <img src="https://img.icons8.com/color/48/000000/mastercard.png"/> */
}
{
  /* <img src="https://img.icons8.com/fluent/48/000000/amex.png"/> */
}
