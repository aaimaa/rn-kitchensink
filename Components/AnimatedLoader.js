import React,{useRef} from 'react'
import { StyleSheet, Text, View,ActivityIndicator } from 'react-native'
import LottieView from 'lottie-react-native'
import { withDecay } from 'react-native-reanimated'
const AnimatedLoader = () => {
    const animation=React.useRef(null)
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <LottieView source={require('../assets/loading.json')}  autoPlay={true} loop={true}  ref={animation} style={{width:200,height:200}}
      />
      
        </View>
    )
}

export default AnimatedLoader

const styles = StyleSheet.create({})
