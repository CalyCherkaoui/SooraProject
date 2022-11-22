import React from 'react'
import { View, StyleSheet } from 'react-native'
import InputEmail from '../components/InputEmail'

function BoxInput() {
  return (
    <View style={styles.BoxInput}>
      <InputEmail />
    </View>
  )
}

const styles = StyleSheet.create({
  BoxInput: {
    alignContent: 'center',
    padding: 20,
  },
});

export default BoxInput