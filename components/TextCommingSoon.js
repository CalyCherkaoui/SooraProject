import React from 'react';
// import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { useFonts } from 'expo-font';

function TextCoomingSoon(props) {
  const [fontsLoaded] = useFonts({
    'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
  })

  if (!fontsLoaded) {
    return (
      <Text style={{fontSize: 16}}>Comming Soon</Text>
    )
  }
  return (
    <Text style={{fontFamily: 'Inter-Regular', fontSize: 16}}>Comming Soon</Text>
  )
}

export default TextCoomingSoon
