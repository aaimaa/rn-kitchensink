import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
  ImageBackground,
} from "react-native";
import { Container, Content, Card, CardItem } from "native-base";
import GestureRecognizer, {
  swipeDirections,
} from "react-native-swipe-gestures";
const SwipeableList = () => {
  const data = [{ title: "card1" }, { title: "card2" }];
  const [pos, setPos] = useState(0);
  console.log(`${pos}`);
  return (
    <Container>
      <Content contentContainerStyle={{ flex: 1 }}>
        <View style={{ position: "relative" }}>
          <ImageBackground
            source={require("../assets/pexels_1.jpg")}
            style={{
              width: "100%",
              height: 200,
              position: "absolute",
              marginRight: pos,
            }}
          >
            <Text
              style={{
                position: "absolute",
                fontWeight: "bold",
                color: "white",
                fontSize: 30,
                top: 70,
                left: 15,
              }}
            >
              {" "}
              Workouts
            </Text>
          </ImageBackground>
          {/* 
<FlatList
data={data}
contentContainerStyle={{position:'absolute'}}
renderItem={({item})=><Text>Hhello</Text>
}/> */}
          <GestureRecognizer onSwipeRight={() => console.log("Swiped Right")}>
            <ScrollView
              horizontal
              contentContainerStyle={{
                flexDirection: "row",
                marginTop: 150,
                marginLeft: 30,
              }}
              onScroll={() => setPos(pos + 10)}
            >
              <Card style={{ borderRadius: 12 }}>
                <CardItem
                  style={{
                    backgroundColor: "red",
                    height: 70,
                    width: 150,
                    borderRadius: 12,
                  }}
                >
                  <Text>card</Text>
                </CardItem>
              </Card>
              <Card style={{ borderRadius: 12 }}>
                <CardItem
                  style={{
                    backgroundColor: "red",
                    height: 70,
                    width: 150,
                    borderRadius: 12,
                  }}
                >
                  <Text>card</Text>
                </CardItem>
              </Card>
              <Card style={{ borderRadius: 12 }}>
                <CardItem
                  style={{
                    backgroundColor: "red",
                    height: 70,
                    width: 150,
                    borderRadius: 12,
                  }}
                >
                  <Text>card</Text>
                </CardItem>
              </Card>
              <Card style={{ borderRadius: 12 }}>
                <CardItem
                  style={{
                    backgroundColor: "red",
                    height: 70,
                    width: 150,
                    borderRadius: 12,
                  }}
                >
                  <Text>card</Text>
                </CardItem>
              </Card>
            </ScrollView>
          </GestureRecognizer>
        </View>
      </Content>
    </Container>
  );
};
export default SwipeableList;

const styles = StyleSheet.create({});

// (
//     <Card style={{position:'absolute',top:150,borderRadius:12}}>
//         <CardItem style={{backgroundColor:'red',height:70,width:150,borderRadius:12}}>
//     <Text>{item.title}</Text>
//         </CardItem>
//     </Card>)
