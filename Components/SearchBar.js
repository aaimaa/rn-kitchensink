import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Item, Input, Container, Content } from "native-base";
import { AntDesign } from "@expo/vector-icons";
const SearchBar = () => {
  return (
      <Container style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <View
      style={{
        flexDirection: "row",
        margin: 12,
        borderWidth: 1.5,
        borderColor: "#012d32",
        height: 44,
        width: "95%",
        alignItems: "center",
        borderRadius: 5,
      }}
    >
      <View style={{ marginLeft: 10 }}>
        <AntDesign name="search1" size={21} color="#012d32" />
      </View>
      <Text
        style={{ paddingLeft: 6, fontSize: 18, color: "darkgray" }}
        numberOfLines={1}
      >
        Find Medicines
      </Text>
    </View>
    </Container>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
