import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Buttons from '../Components/Buttons';
import Carousel from '../Components/Carousel';
import { TouchableOpacity ,Image,View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Cards from '../Components/Cards'
import ListItems from '../Components/ListItems';
import LineGraph from '../Features/LineGraph';
const Tab = createBottomTabNavigator();

const CustomTabBarButton=({children,onPress})=>{
  return(
    <TouchableOpacity
    style={{top:-20,justifyContent:'center',alignItems:'center'}} onPress={onPress}>
  <View style={{width:70,height:70,borderRadius:24}}>
    {children}
  </View>
    </TouchableOpacity>
  )
 
}
export default function BottomTabNavigator() {
  return (
    <NavigationContainer>
    <Tab.Navigator>
   
      <Tab.Screen name="Cards" component={Cards} />
      <Tab.Screen name="Carousel" component={Carousel} />
      <Tab.Screen name="Buttons" component={Buttons} 
      options={{tabBarIcon:({foucsed})=>(
        <Image source={{uri:"https://img.icons8.com/color/48/000000/joyent--v1.png"}} style={{width:50,height:50}}/>
      ),
      tabBarButton:(props)=>(
        <CustomTabBarButton {...props}/>
      )}}/>
      <Tab.Screen name="ListItems" component={ListItems} />
<Tab.Screen name="LineGraph" component={LineGraph}/>
    </Tab.Navigator>
    </NavigationContainer>
  );
}
