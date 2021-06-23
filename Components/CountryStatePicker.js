import React from 'react'
import { StyleSheet, Text, View ,FlatList} from 'react-native'
import { getCountries,getStates } from 'country-state-picker'
import { List,ListItem } from 'native-base'
const CountryStatePicker = () => {
   console.log(getStates('in'))
    const data=getCountries();
    return (
        <FlatList
        data={data}
        renderItem={({item})=>
        <List>
            <ListItem>
            <Text>{item.name}</Text>
            </ListItem>
        </List>
        
    }/>
    )
}

export default CountryStatePicker

const styles = StyleSheet.create({})
