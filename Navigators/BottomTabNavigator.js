import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Buttons from '../Components/Buttons';
import Carousel from '../Components/Carousel';
const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Buttons" component={Buttons} />
      <Tab.Screen name="Carousel" component={Carousel} />
    </Tab.Navigator>
  );
}