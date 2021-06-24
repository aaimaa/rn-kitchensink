import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import {StyleSheet,Image} from 'react-native'
import { Container } from 'native-base';
const OnboardingScreens = () => {
    return (
        <Container>
        <Onboarding
        pages={[
          {
            backgroundColor: '#fff',
            image: <Image source={require('../assets/il1.png')} style={{width:300,height:200}} />,
            title: 'Onboarding',
            subtitle: 'Welcome',
          },
          {
            backgroundColor: '#fff',
            image: <Image source={require('../assets/il2.png')} style={{width:300,height:200}}/>,
            title: 'Onboarding',
            subtitle: 'Lets dive into this',
          },
          {
            backgroundColor: '#fff',
            image: <Image source={require('../assets/il3.png')} style={{width:300,height:200}} />,
            title: 'Onboarding',
            subtitle: 'Happy Journey',
          },
        ]}
      />
      </Container>
    )
}

export default OnboardingScreens

const styles = StyleSheet.create({})
