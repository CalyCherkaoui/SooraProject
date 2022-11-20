import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { useFonts } from 'expo-font';

function HeroTitle(props) {
  const [fontsLoaded] = useFonts({
    'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
  })

  if (!fontsLoaded) {
    return (
      <Text style={{fontSize: 20}}>{props.myText}</Text>
    )
  }
  return (
    <Text style={{fontFamily: 'Inter-Bold', fontSize: 20}}>{props.myText}</Text>
  )
}

HeroTitle.propTypes = {
  myText: PropTypes.string,
}

// const styles = StyleSheet.create({
//   textHeroTitle: {
//     fontSize: 20,
//     fontFamily: 'Inter-Bold',
//   },
//   textHeroTitleBasic: {
//     fontSize: 20,
//   }
// })
export default HeroTitle
