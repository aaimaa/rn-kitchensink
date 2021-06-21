import React,{useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Container,Content,List,ListItem,Icon, } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
const Dropdown = () => {
   const [show,setShow]=useState();
return(
   <Container>
       <Content contentContainerStyle={{justifyContent:'center',flex:1}}>
       <ListItem onPress={()=>setShow(!show)}>
           <Text>Heading</Text>
           <Icon
                name="keyboard-arrow-down"
                type="MaterialIcons"
                size={24}
                color="black"
              />
       </ListItem>
        {show == true ? (
            <>
              <View style={{ flexDirection: 'column' }}>
                <ListItem>
                                 
                  <AntDesign name="arrowright" size={12} color="black" />
                  <Text>Option 1</Text>
                </ListItem>
                <ListItem
                >
                  <AntDesign name="arrowright" size={12} color="black" />
                  <Text>Option 2</Text>
                </ListItem>
              </View>
            </>
          ) : null}
          </Content>
          </Container>)
    
}

export default Dropdown

const styles = StyleSheet.create({})
