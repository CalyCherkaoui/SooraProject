import React from 'react'
import { View, StyleSheet } from 'react-native'
import TextComingSoon from '../components/TextComingSoon'
import HeroTitle from '../components/HeroTitle'
import BoxStoresImages from '../components/BoxStoresImages'

function BoxDisplay1() {
  return (
    <View style={styles.boxDisplay}>
      <TextComingSoon />
      <HeroTitle myText={"Bringing\nMuslims Together"} />
      <BoxStoresImages />
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

export default BoxDisplay1