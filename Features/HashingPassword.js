import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as Crypto from 'expo-crypto';

export default function HashingPassword() {
  useEffect(() => {
    (async () => {
      const digest = await Crypto.digestStringAsync(
        Crypto.CryptoDigestAlgorithm.SHA256,
        'Aaimaa Web Solutions'
      );
      console.log('Digest: ', digest);
      /* Some crypto operation... */
    })();
  }, []);

  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Lets do hashing</Text>
    </View>
  );
}