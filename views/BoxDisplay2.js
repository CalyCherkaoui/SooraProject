import React from 'react'
import { View, StyleSheet } from 'react-native'
import TextComingSoon from '../components/TextComingSoon'
import HeroTitle from '../components/HeroTitle'

function BoxDisplay2() {
  return (
    <View style={styles.boxDisplay}>
      <TextComingSoon />
      <HeroTitle myText={"Get Notifiyed\nWhen we Launch"} />
    </View>
  )
}

const styles = StyleSheet.create({
  boxDisplay:{
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 60,
    justifyContent: 'center'
  },
});

export default BoxDisplay2