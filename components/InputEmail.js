import React, { useState } from 'react'
import { Button, TextInput, View, Text, StyleSheet } from 'react-native'

const InputEmail = () => {
  // const [email, SetEdMail] = useState('');
  const [submitted, SetSubmitted] = useState(false);
  const onPressHandler = () => {
    SetSubmitted(!submitted);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder=''
        style={styles.inputStyle}
        // onChangeText={(val) => SetEdMail(val)}
      />
      <Button
        title='Notify me!'
        style={styles.buttonStyle}
        onPress={onPressHandler}
       />
       {submitted?
        <Text>Your email adress has been recieved.</Text>
        :
        null
       }
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: 'yellow',
  },
  inputStyle: {
    backgroundColor: 'blue',
  },
  buttonStyle: {

  },
  textContainer: {
    backgroundColor: 'pink',
  },
  textStyle: {
    backgroundColor: 'green',
  }
});

export default InputEmail