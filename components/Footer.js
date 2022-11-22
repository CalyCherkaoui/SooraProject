import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import { useFonts } from 'expo-font';

function Footer() {
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
    backgroundColor: 'pink',
    textAlign: true,
    height: '50',
  }

  if (!fontsLoaded) {
    textCopyrights = {};
  }
  return (
    <View style={styles.footerContainer}>
      <View style={styles.footerSocialMedia}>
        <TouchableOpacity style={styles.footerIconBox}>
          <Image
            source={require('../assets/images/facebook.png')}
            style={styles.footerIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerIconBox}>
          <Image
            source={require('../assets/images/twitter.png')}
            style={styles.footerIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerIconBox}>
          <Image
            source={require('../assets/images/instagram.png')}
            style={styles.footerIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerIconBox}>
          <Image
            source={require('../assets/images/tiktok.png')}
            style={styles.footerIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerIconBox}>
          <Image
            source={require('../assets/images/youtube.png')}
            style={styles.footerIconStyle}
          />
        </TouchableOpacity>
      </View>
        <Text
          style={{...textCopyrights, ...textCopyrightsStyle}}
        >
          {"Copyright \u00a9 2022 Soora. All rights reserved"}
        </Text>
   </View>
  )
}

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: 'blue',
  },
  footerSocialMedia: {
    backgroundColor: 'red',
    paddingTop: 50,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerIconBox: {
    backgroundColor: 'powderblue',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 100,
    marginHorizontal: 5,
  },
  footerIconStyle: {
    resizeMode: 'contain',
    width: 24,
    height: 24,
  },
  // footerCopyrights: {
  //   backgroundColor: 'green',
  //   height: '50',
  // },
})

export default Footer