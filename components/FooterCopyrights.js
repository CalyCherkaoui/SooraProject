import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import { useFonts } from 'expo-font'

function FooterCopyrights() {
  const [fontsLoaded] = useFonts({
    'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
  })

  let textCopyrights = {
    fontFamily: 'Inter-Regular',
  }

  const textCopyrightsStyle = {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14.52,
    textAlign: 'center',
  }

  if (!fontsLoaded) {
    textCopyrights = {};
  }

  return (
    <View style={styles.copyrightBox}>
        <Text
          style={{...textCopyrights, ...textCopyrightsStyle}}
        >
          {"Copyright \u00a9 2022 Soora. All rights reserved"}
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  copyrightBox : {
    backgroundColor: 'yellow',
    paddingVertical: 18,
  }
})

export default FooterCopyrights