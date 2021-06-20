import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import NavDrawer from './NavDrawer'
import Buttons from '../Components/Buttons'
const Drawer = createDrawerNavigator();

export default function HomeDrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <NavDrawer {...props} />}>
        <Drawer.Screen name="Buttons" component={Buttons}/>
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
