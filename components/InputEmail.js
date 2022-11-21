import React, { useState } from 'react'
import { Button, TextInput, View, Text, StyleSheet } from 'react-native'
import { useFonts } from 'expo-font';

const InputEmail = () => {
  // const [email, SetEdMail] = useState('');
  const [submitted, SetSubmitted] = useState(false);
  const onPressHandler = () => {
    SetSubmitted(!submitted);
  }

  const [fontsLoaded] = useFonts({
    'Inter-Medium': require('../assets/fonts/Inter-Medium.ttf'),
  })

  let inputBtnTypo = {
    fontFamily: 'Inter-Medium',
  }

  const inputBtnTextStyle = {
    fontSize: 12,
    fontWeight: "600",
    lineHeight: 14.52,
    textAlign: "center",
    color: 'white'
  }

  if (!fontsLoaded) {
    inputBtnTypo = {};
  }

  return (
    <View style={styles.inputContainer}>
      <View style={styles.formStyle}>
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
        <TouchableOpacity
          style={styles.buttonStyle}
          // activeOpacity={1}
          onPress={onPressHandler}
          >
          <Text style={{...inputBtnTextStyle, ...inputBtnTypo}}>Notify me!</Text>
        </TouchableOpacity>
      </View>
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
  formStyle: {
    backgroundColor: 'gray',
    padding: 10,
    flexDirection: 'row',
  },
  inputStyle: {
    backgroundColor: 'blue',
  },
  buttonStyle: {
    color: 'black',
  },
  textContainer: {
    backgroundColor: 'pink',
  },
  textStyle: {
    backgroundColor: 'green',
  }
});

export default InputEmail