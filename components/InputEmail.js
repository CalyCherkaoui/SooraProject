import React, { useState } from 'react';
import { TextInput, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';

function InputEmail(props) {
  // const [email, SetEdMail] = useState('');
  const [submitted, SetSubmitted] = useState(false);
  const [fontsLoaded] = useFonts({
    'Inter-SemiBold': require('../assets/fonts/Inter-SemiBold.ttf')
  })

  let textStyleTypo = {
    fontFamily: 'Inter-SemiBold',
  }

  const inputBtnTextStyle = {
    fontSize: 12,
    fontWeight: "600",
    lineHeight: 14.52,
    textAlign: 'center',
    color: 'white'
  }

  const textStyle = {
    fontSize: 12,
    fontWeight: "600",
    lineHeight: 14.52,
    textAlign: 'center',
    color: '#3b5998',
    marginBottom: 4,
  }

  const textNoteStyle = {
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 14.52,
    textAlign: 'center',
    color: 'balck',
  }

  if (!fontsLoaded) {
    textStyleTypo = {};
  };

  const onPressHandler = () => {
    SetSubmitted(!submitted);
  };

  return (
    <View>
      <View style={styles.formStyle}>
        <TextInput
          placeholder=''
          style={styles.inputStyle}
          // onChangeText={(val) => SetEdMail(val)}
        />
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={onPressHandler}
          >
          <Text style={{...inputBtnTextStyle, ...textStyleTypo}}>Notify me!</Text>
        </TouchableOpacity>
      </View>
       {submitted?
        <Text style={{...textStyle, ...textStyleTypo}}>Your email adress has been recieved.</Text>
        :
        null
       }
      <Text style={{...textNoteStyle}}>{"Don't worry, we won't spam you :)"} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  formStyle: {
    padding: 3,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 100,
    borderColor: 'black',
    borderWidth: 0.8,
    height: 45,
    marginBottom: 8.25,
  },
  inputStyle: {
    borderRadius: 100,
    flex: 2,
    fontSize: 12,
    height: '90%',
    padding: 5,
  },
  buttonStyle: {
    backgroundColor: 'black',
    width: 100,
    height: 36,
    borderRadius: 100,
    justifyContent: 'center',
  },
})

export default InputEmail;
