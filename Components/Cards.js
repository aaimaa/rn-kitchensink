import React from 'react'
import { StyleSheet, Text, View ,Image} from 'react-native'
import { Container,Content } from 'native-base'
const Cards = () => {
    return (
        <Container>
            <Content contentContainerStyle={{justifyContent:'center',alignItems:'center',flex:1}}>
                {/* Rounded Card With Cover */}
        <Image
        source={{uri:'https://a10.gaanacdn.com/gn_img/albums/10q3ZR1352/0q3ZjjQ135/size_xxl.jpg'}}
        style={{ width: 140, height: 180, marginLeft: 12, borderRadius: 12 }}
      />
        </Content>
        </Container>
       
    )
}

export default Cards

const styles = StyleSheet.create({})
