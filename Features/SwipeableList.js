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
import { MaterialIcons } from '@expo/vector-icons';
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
                marginLeft: 30
              }}
              showsHorizontalScrollIndicator={false}
              
            >
             <Card style={{ flexDirection: "row", height: 100 ,width:280,borderRadius:8,justifyContent:'flex-start',alignItems:'center',flex:1}}>
          <Card
            style={{
              width: 60,
              height:60,
              justifyContent: "center",
              alignItems: "center",
              marginLeft:20
            }}
          >
            <Image
              source={require('../assets/pexels_1.jpg')}
              style={{ width: 60, height:'100%'}}
            />
          </Card>
          <View style={{ justifyContent: "center",position:'absolute',left:100,top:20 }}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{ fontSize: 12,color:'darkgray' }}>2h ago</Text>
            </View>
            <View style={{ flexDirection: "row",marginTop:10 }}>
              <Text style={{fontSize:18,fontWeight:'bold'}}>Right Trap</Text> 
          <MaterialIcons name="keyboard-arrow-right" size={24} color="darkgray" style={{position:'absolute',bottom:0,left:140}}/>

            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{fontSize:12,fontWeight:'bold',color:'blue'}}>Extended Recovery</Text> 
            </View>
          </View>
        </Card>
        <Card style={{ flexDirection: "row", height: 100 ,width:250,borderRadius:8,justifyContent:'flex-start',alignItems:'center'}}>
          <Card
            style={{
              width: 60,
              height:60,
              justifyContent: "center",
              alignItems: "center",
              marginLeft:20
            }}
          >
            <Image
              source={require('../assets/pexels_1.jpg')}
              style={{ width: 60, height:'100%'}}
            />
          </Card>
          <View style={{ justifyContent: "center",position:'absolute',left:100,top:20 }}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{ fontSize: 12,color:'darkgray' }}>2h ago</Text>
            </View>
            <View style={{ flexDirection: "row",marginTop:10 }}>
              <Text style={{fontSize:18,fontWeight:'bold'}}>Right Trap</Text> 

            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{fontSize:12,fontWeight:'bold',color:'blue'}}>Extended Recovery</Text> 
            </View>
          </View>
        </Card>
        <Card style={{ flexDirection: "row", height: 100 ,width:250,borderRadius:8,justifyContent:'flex-start',alignItems:'center'}}>
          <Card
            style={{
              width: 60,
              height:60,
              justifyContent: "center",
              alignItems: "center",
              marginLeft:20
            }}
          >
            <Image
              source={require('../assets/pexels_1.jpg')}
              style={{ width: 60, height:'100%'}}
            />
          </Card>
          <View style={{ justifyContent: "center",position:'absolute',left:100,top:20 }}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{ fontSize: 12,color:'darkgray' }}>2h ago</Text>
            </View>
            <View style={{ flexDirection: "row",marginTop:10 }}>
              <Text style={{fontSize:18,fontWeight:'bold'}}>Right Trap</Text> 

            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{fontSize:12,fontWeight:'bold',color:'blue'}}>Extended Recovery</Text> 
            </View>
          </View>
        </Card>
        <Card style={{ flexDirection: "row", height: 100 ,width:250,borderRadius:8,justifyContent:'flex-start',alignItems:'center',flex:1}}>
          <Card
            style={{
              width: 60,
              height:60,
              justifyContent: "center",
              alignItems: "center",
              marginLeft:20
            }}
          >
            <Image
              source={require('../assets/pexels_1.jpg')}
              style={{ width: 60, height:'100%'}}
            />
          </Card>
          <View style={{ justifyContent: "center",position:'absolute',left:100,top:20 }}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{ fontSize: 12,color:'darkgray' }}>2h ago</Text>
            </View>
            <View style={{ flexDirection: "row",marginTop:10 }}>
              <Text style={{fontSize:18,fontWeight:'bold'}}>Right Trap</Text> 

            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{fontSize:12,fontWeight:'bold',color:'blue'}}>Extended Recovery</Text> 
            </View>
          </View>
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
