import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { LineChart } from 'react-native-chart-kit'
const LineGraph = () => {
    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => "red",
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
      };
    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 40,60, 80, 100, 120],
            color: (opacity = 1) => "red", // optional
            strokeWidth: 2 // optional
          }
        ]
      };
    return (
        <View style={{flex:1,justifyContent:'center'}}>
            <LineChart
            data={data}
            width={Dimensions.get('screen').width}
            height={300}
            chartConfig={chartConfig}
            />
        </View>
    )
}

export default LineGraph

const styles = StyleSheet.create({})
