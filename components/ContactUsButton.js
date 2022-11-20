import React from 'react';
import { Text, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useFonts } from 'expo-font';

function ContactUsButton(props) {
  const [fontsLoaded] = useFonts({
    'Inter-SemiBold': require('../assets/fonts/Inter-SemiBold.ttf'),
  })

  const showAlert = () => {
    Alert.alert(
      "Reach out to us through",
      "sooratheapp@gmail.com"
    )
  }

  let textTypo = {
    fontFamily: 'Inter-SemiBold',
  }

  const buttonTextStyle = {
    fontSize: 10,
    fontWeight: "700",
    lineHeight: 12.1,
    textAlign: "center",
    color: 'white'
  }

  if (!fontsLoaded) {
    textTypo = {};
  }
  return (
    <TouchableOpacity
          style={styles.ContactBtnStl}
          // activeOpacity={1}
          onPress={showAlert}
          >
          <Text style={{...buttonTextStyle, ...textTypo}}>Contact Us</Text>
          <Image
            source={require('../assets/images/contact-icon.png')}
            style={styles.buttonImageIconStyle}
          />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  ContactBtnStl: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 5,
    paddingLeft: 14,
    paddingRight: 14,
    height: 32,
  },
  buttonImageIconStyle: {
    width: 10,
    resizeMode: 'contain',
    marginLeft: 8,
  },
})

export default ContactUsButton;