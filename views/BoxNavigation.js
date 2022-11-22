import React from 'react'
import { View, StyleSheet } from 'react-native'
import ContactUsButton from '../components/ContactUsButton'

function BoxNavigation() {
  return (
    <View style={styles.boxNavigation}>
      <Image
        source={require('../assets/images/logo1.png')}
        style={styles.imgLogo}
      />
      <ContactUsButton />
    </View>
  )
}

const styles = StyleSheet.create({
  boxNavigation:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    height: 32,
    paddingLeft: 20,
    paddingRight: 20,
  },
  imgLogo: {
    resizeMode: "contain",
    height: 16,
    width: 75,
  },
});

export default BoxNavigation