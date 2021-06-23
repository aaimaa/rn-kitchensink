import { getStates } from 'country-state-picker'
import React from 'react'
import { StyleSheet, Text, View,FlatList } from 'react-native'
import {List,ListItem} from 'native-base'
const States = ({route}) => {
    const {state}=route.params
    const statesData=getStates(state)
    console.log(statesData)
    return (
       <FlatList
       data={statesData}
       renderItem={({item})=>(
           <List>
               <ListItem><Text>{item}</Text></ListItem>
           </List>
       )}/>
    )
}

export default States

const styles = StyleSheet.create({})
