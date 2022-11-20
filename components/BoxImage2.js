import React from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';

function BoxImage2(props) {
  const imageTitle = "landing-image-2";
  return (
    <Image
      source={require(`../assets/images/${imageTitle}.png`)}
      style={styles.image}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    resizeMode: "contain",
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height/2,
    // backgroundColor: 'red',
  }
})

export default BoxImage2;