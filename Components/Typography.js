import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { H1,H2,H2,Container,Content } from 'native-base'
const Typography = () => {
    return (
        <Container>
            <Content>
                <H1>Heading 1</H1>
                <H2>Heading 2</H2>
                <H3>Heading 3</H3>
            </Content>
        </Container>
    )
}

export default Typography

const styles = StyleSheet.create({})
