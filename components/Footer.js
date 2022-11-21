import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

function Footer() {
  return (
    <View style={styles.footerContainer}>
      <View style={styles.footerSocialMedia}>
        <Text>Facebook Twitter</Text>
      </View>
      <View style={styles.footerCopyrights}>
        <Text>Copyright 2022 Soora. All rights reserved</Text>
      </View>
   </View>
  )
}

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: 'blue',
  },
  footerSocialMedia: {
    backgroundColor: 'red',
  },
  footerCopyrights: {
    backgroundColor: 'green',
  },
})

export default Footer