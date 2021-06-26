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
import AccountForm from './Components/AccountForm';
import Webview from './Components/WebView';
import PaymentInfo from './Components/PaymentInfo';
import CountryStatePicker from './Components/CountryStatePicker';
import CountryNavigator from './Navigators/CountryNavigator';
import SwipeableList from './Features/SwipeableList';
import LineGraph from './Features/LineGraph';
import OnboardingScreens from './Features/OnboardingScreens';
import SearchBar from './Components/SearchBar';
import BottomTabNavigator from './Navigators/BottomTabNavigator';
import CurrentLocation from './Features/CurrentLocation';
import SystemSettings from './Features/SystemSettings';
export default function App() {
  return (
    // <SwipeableList/>
    // <LineGraph/>
    // <SearchBar/>
    // <CountryNavigator/>
    // <Webview/>
    // <PaymentInfo/>
    // <Cards/>
    // <ListItems/>
    // <Banners/>
    // <TopBottomAnim/>
    // <CurrentLocation/>
    <SystemSettings/>
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
