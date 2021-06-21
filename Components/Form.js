import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Container,Item,Content,Input,Button } from 'native-base'
const Form = () => {
    return (
     <Container style={{justifyContent:'center',alignItems:'center'}}>
        <Item regular style={{margin:20,borderRadius:6,width:'80%'}}>
          <Input placeholder='Email' placeholderTextColor="black"/>
        </Item>
        <Item regular style={{margin:20,borderRadius:6,width:'80%'}}>
          <Input placeholder='Password' placeholderTextColor="black" secureTextEntry/>
        </Item>
        {/* <Button style={{margin:20,backgroundColor:'black',alignSelf:'center',width:'80%'}}>
            <Text style={{textAlign:'center',alignSelf:'center'}}>
                Submit
            </Text>
        </Button> */}
       
        <Button
          style={{
            width: "90%",
            alignSelf: "center",
            margin:20,
            justifyContent: "center",
            backgroundColor: "#212124",
            borderRadius:6
          }}
          onPress={()=>navigation.navigate('CategoriesScreen')}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>Login</Text>
        </Button>
        </Container>
    )
}

export default Form

const styles = StyleSheet.create({})
