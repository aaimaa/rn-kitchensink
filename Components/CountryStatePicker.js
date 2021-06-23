import React from 'react'
import { StyleSheet, Text, View ,FlatList} from 'react-native'
import { getCountries,getStates } from 'country-state-picker'
import { List,ListItem } from 'native-base'
import { useNavigation } from '@react-navigation/core'
const CountryStatePicker = () => {
    const navigation=useNavigation();
    const data=getCountries();
    return (
        <FlatList
        data={data}
        renderItem={({item})=>
        <List>
            <ListItem onPress={()=>navigation.navigate('StateScreen',{
                state:item.code
            })}>
            <Text>{item.name}</Text>
            </ListItem>
        </List>
        
    }/>
    )
}

export default CountryStatePicker

const styles = StyleSheet.create({})
