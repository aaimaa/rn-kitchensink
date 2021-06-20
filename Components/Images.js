import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { Container, Content } from 'native-base'
const Images = () => {
    return (
      <Container>
          {/* Image from CDN */}
          <Content contentContainerStyle={{alignItems:'center'}}>
<Image source={{uri:'https://avatars.githubusercontent.com/u/25567939?v=4'}} style={{width:300,height:300}}/>
{/* Image from Local */}
<Image source={require('../assets/rnlogo.png')} style={{width:200,height:200}}/>
</Content>
      </Container>
    )
}

export default Images

const styles = StyleSheet.create({})
