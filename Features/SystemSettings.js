import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as Brightness from 'expo-brightness';

export default function SystemSettings() {
  useEffect(() => {
    (async () => {
      const { status } = await Brightness.requestPermissionsAsync();
      if (status === 'granted') {
        Brightness.setSystemBrightnessAsync(1);
      }
    })();
  }, []);

  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Brightness Module Example</Text>
    </View>
  );
}