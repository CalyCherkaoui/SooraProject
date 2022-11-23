import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

function HeroTitle(props) {
  const [fontsLoaded] = useFonts({
    'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <Text style={styles.typographyHeroBasic}>{props.myText}</Text>
    );
  }
  return (
    <Text style={styles.typographyHero}>{props.myText}</Text>
  );
}

HeroTitle.propTypes = {
  myText: PropTypes.string,
};

const styles = StyleSheet.create({
  typographyHero: {
    fontFamily: 'Inter-Bold',
    fontSize: 36,
    fontWeight: '800',
    lineHeight: 44,
    textAlign: 'center',
    color: 'black',
  },
  typographyHeroBasic: {
    fontSize: 36,
    fontWeight: '800',
    lineHeight: 44,
    textAlign: 'center',
    color: 'black',
  },
});
export default HeroTitle;
