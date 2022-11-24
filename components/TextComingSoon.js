import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';

function TextComingSoon() {
  const [fontsLoaded] = useFonts({
    'Inter-Medium': require('../assets/fonts/Inter-Medium.ttf'),
  });

  let textFont = {
    fontFamily: 'Inter-Medium',
  };

  const TextCoomingSoonStyle = {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 14.52,
    alignContent: 'center',
  };

  if (!fontsLoaded) {
    textFont = {};
  }
  return (
    <View style={styles.commingSoonBox}>
      <View style={styles.lineStyle}></View>
      <Text style={{ ...textFont, ...TextCoomingSoonStyle }}>Coming Soon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  commingSoonBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  lineStyle: {
    borderWidth: 1.26,
    borderColor: 'black',
    width: 18,
    backgroundColor: 'black',
    marginRight: 5.6,
  },
});

export default TextComingSoon;
