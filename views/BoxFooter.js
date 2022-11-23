import React from 'react'
import { View, StyleSheet } from 'react-native'
import FooterCopyrights from '../components/FooterCopyrights'
import FooterSocial from '../components/FooterSocial'

function BoxFooter() {
  return (
    <View style={styles.footerContainer}>
      <FooterSocial />
      <FooterCopyrights />
    </View>
  )
}

const styles = StyleSheet.create({
  footerContainer: {
    paddingTop: 100,
  },
})

export default BoxFooter