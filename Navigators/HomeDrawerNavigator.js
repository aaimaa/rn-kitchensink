import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import NavDrawer from './NavDrawer'
import Buttons from '../Components/Buttons'
import Images from '../Components/Images';
import Typography from '../Components/Typography';
import Carousel from '../Components/Carousel';
import BottomTabNavigator from './BottomTabNavigator';
import Form from '../Components/Form';
import Banners from '../Components/Banners';
import TopBottomAnim from '../Components/TopBottomAnim';
const Drawer = createDrawerNavigator();

export default function HomeDrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <NavDrawer {...props} />}>
        <Drawer.Screen name="Buttons" component={Buttons}/>
        <Drawer.Screen name="Images" component={Images}/>
        <Drawer.Screen name="Typography" component={Typography}/>
        <Drawer.Screen name="Carousel" component={Carousel}/>
        <Drawer.Screen name="BottomTabNavigator" component={BottomTabNavigator}/>
        <Drawer.Screen name="Form" component={Form}/>
        <Drawer.Screen name="Banners" component={Banners}/>
        <Drawer.Screen name="TopBottom" component={TopBottomAnim}/>

      </Drawer.Navigator>
    </NavigationContainer>
  );
}

function HomeDrawerNavigatorRight() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerPosition="right" drawerType='slide' drawerContent={(props) => <NavDrawer {...props} />}>
        <Drawer.Screen name="Buttons" component={Buttons}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
