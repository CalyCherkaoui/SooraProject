import React, { useState } from 'react';
import { TextInput, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';

function InputEmail(props) {
  // const [email, SetEdMail] = useState('');
  const [submitted, SetSubmitted] = useState(false);
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
  };

  const onPressHandler = () => {
    SetSubmitted(!submitted);
  };

  return (
    <View style={styles.inputContainer}>
      <View style={styles.formStyle}>
        <TextInput
          placeholder=''
          style={styles.inputStyle}
          // onChangeText={(val) => SetEdMail(val)}
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
        <Text style={styles.textStyle}>Your email adress has been recieved.</Text>
        :
        null
       }
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: 'yellow',
  },
  formStyle: {
    backgroundColor: 'gray',
    padding: 3,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 100,
    borderColor: 'black',
    borderWidth: 2,
    height: 45,
  },
  inputStyle: {
    backgroundColor: 'blue',
    borderRadius: 100,
    flex: 2,
    fontSize: 12,
    height: '90%',
  },
  buttonStyle: {
    backgroundColor: 'black',
    width: 100,
    height: 36,
    borderRadius: 100,
    justifyContent: 'center',
  },
  textContainer: {
    backgroundColor: 'pink',
  },
  textStyle: {
    backgroundColor: 'green',
  }
})

export default InputEmail;
