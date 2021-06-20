import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button ,Icon} from "native-base";
const Buttons = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Button full success style={{margin:20}}>
        <Text>Click here</Text>
      </Button>
      <Button full warning bordered style={{margin:20}}>
        <Text>Click here</Text>
      </Button>
      <Button full  transparent style={{margin:20}}>
        <Text>Click here</Text>
      </Button>
      <Button full danger block style={{margin:20}}>
        <Text>Click here</Text>
      </Button>
      <Button full info rounded style={{margin:20}}>
        <Text>Click here</Text>
      </Button>
      <Button iconRight light full style={{margin:20}}>
            <Text>Next</Text>
            <Icon name='home' />
          </Button>
    </View>
  );
};

export default Buttons;

const styles = StyleSheet.create({});
