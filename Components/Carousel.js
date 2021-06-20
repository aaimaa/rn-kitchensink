import React from 'react'
import {  StyleSheet, Text, View } from 'react-native'
import {SliderBox} from 'react-native-image-slider-box'
import { Container,Content } from 'native-base'
const Carousel = () => {
    const images=[
        "https://media.istockphoto.com/photos/smartphone-media-technology-and-social-network-concept-picture-id1050217124?k=6&m=1050217124&s=612x612&w=0&h=-2tflGsDvA9LL6P-es4EYfln9FE2EE1geuv5b3aWNkw=",
        "https://www.thedroidsonroids.com/wp-content/uploads/2019/05/flutter_blog-v.2-1200x640.png",
        "https://techcrunch.com/wp-content/uploads/2021/03/flutter2.png?w=730&crop=1"
    ]
    return (
        <Container>
            <Content>
                <SliderBox
                images={images}/>
            </Content>
        </Container>
    )
}

export default Carousel

const styles = StyleSheet.create({})
