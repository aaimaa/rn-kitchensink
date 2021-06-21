import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import HomeDrawerNavigator from './Navigators/HomeDrawerNavigator';
import SVGIcon from './Components/SVGIcon';
import Dropdown from './Components/Dropdown';
export default function App() {
  return (
    <Dropdown/>
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
