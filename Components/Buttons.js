import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "native-base";
const Buttons = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Button full>
        <Text>Click here</Text>
      </Button>
    </View>
  );
};

export default Buttons;

const styles = StyleSheet.create({});
