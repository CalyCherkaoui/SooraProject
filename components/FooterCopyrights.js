import React from 'react'
import { View, Text } from 'react-native'
// import { useFonts } from 'expo-font'

function FooterCopyrights() {
  // const [fontsLoaded] = useFonts({
  //   'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
  // })

  // let textCopyrights = {
  //   // fontFamily: 'Inter-Regular',
  // }

  // const textCopyrightsStyle = {
  //   fontSize: 12,
  //   fontWeight: '400',
  //   lineHeight: 14.52,
  //   backgroundColor: 'pink',
  //   // textAlign: true,
  //   height: '50',
  // }

  // if (!fontsLoaded) {
  //   textCopyrights = {};
  // }

  return (
    <View>
        <Text
          // style={{...textCopyrights, ...textCopyrightsStyle}}
        >
          {/* {"Copyright \u00a9 2022 Soora. All rights reserved"} */}
          Copyright 2022 Soora. All rights reserved
        </Text>
   </View>
  )
}


export default FooterCopyrights