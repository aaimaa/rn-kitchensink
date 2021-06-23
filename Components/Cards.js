import React from 'react'
import { StyleSheet, Text, View ,Image} from 'react-native'
import { Container,Content ,Card,CardItem} from 'native-base'
const Cards = () => {
    return (
        <Container>
            <Content contentContainerStyle={{justifyContent:'center',alignItems:'center',flex:1}}>
                {/* Rounded Card With Cover */}
        <Image
        source={{uri:'https://a10.gaanacdn.com/gn_img/albums/10q3ZR1352/0q3ZjjQ135/size_xxl.jpg'}}
        style={{ width: 140, height: 180, marginLeft: 12, borderRadius: 12 }}
      />
      {/* Card with icon */}
      <Card
                    rounded
                    style={{
                      height: 150,
                      // paddingVertical: 6,
                      // paddingHorizontal: 14,

                      borderRadius: 20,
                      // width:'100%'
                    }}
                  >
                    <CardItem style={{ alignSelf: 'center', marginBottom: -2 }}>
                    <Image
                        source={{
                          uri: "https://img.icons8.com/emoji/48/000000/goat-emoji.png"
                        }}
                        style={{ width: 50, height: 50 }}
                      />
                    </CardItem>
                    <CardItem style={{ justifyContent: 'center' }}>
                      <Text style={{textAlign:'center',fontSize:16}}>Goat</Text>
                    </CardItem>
                  </Card>
        </Content>
        </Container>
       
    )
}

export default Cards

const styles = StyleSheet.create({})
