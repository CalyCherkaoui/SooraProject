import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

function BoxStoresImages() {
  return (
    <View style={styles.BoxStoresStyle}>
      <Image
        style={styles.ImageStoresStyleGoogle}
        source={require('../assets/images/google-play.png')}
      />
      <Image
        style={styles.ImageStoresStyleApple}
        source={require('../assets/images/apple-store.png')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  BoxStoresStyle: {
    // backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 24,
  },
  ImageStoresStyleGoogle: {
    width: 134.19,
    height: 38.8,
    marginRight: 16,
  },
  ImageStoresStyleApple: {
    width: 134.19,
    height: 38.8,
  },
})

export default BoxStoresImages
