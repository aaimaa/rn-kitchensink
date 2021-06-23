import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import CountryStatePicker from '../Components/CountryStatePicker';
import States from '../Screens/States';
import { NavigationContainer } from '@react-navigation/native';
const Stack=createStackNavigator();
const CountryNavigator = () => {
    return (
        
        <Stack.Navigator>
            <Stack.Screen name="CountryStatePicker" component={CountryStatePicker}/>
            <Stack.Screen name="StateScreen" component={States}/>
        </Stack.Navigator>
       
    )
}

export default CountryNavigator

const styles = StyleSheet.create({})
