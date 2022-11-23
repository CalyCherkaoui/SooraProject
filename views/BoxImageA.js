import React from 'react'
import { StyleSheet, View } from 'react-native'
import BoxImage2 from '../components/BoxImage2'

function BoxImageA() {
  return (
    <View style={styles.containerImg}>
      <BoxImage2 />
    </View>
  )
}
 const styles = StyleSheet.create({
  containerImg: {
    backgroundColor: 'yellow',
  }
 })
export default BoxImageA