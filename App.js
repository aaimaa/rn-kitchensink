import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import HomeDrawerNavigator from './Navigators/HomeDrawerNavigator';
import SVGIcon from './Components/SVGIcon';
import Dropdown from './Components/Dropdown';
import Form from './Components/Form';
import Cards from './Components/Cards';
import ListItems from './Components/ListItems';
import Banners from './Components/Banners';
import TopBottomAnim from './Components/TopBottomAnim';
export default function App() {
  return (
    // <HomeDrawerNavigator/>
    // <Cards/>
    // <ListItems/>
    // <Banners/>
    <TopBottomAnim/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
