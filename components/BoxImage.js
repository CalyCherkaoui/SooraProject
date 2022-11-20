import React from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';

function BoxImage(props) {
  const imageTitle = "landing-image-1";
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
    // height: "100%",
    backgroundColor: 'red',
    // borderColor: 'blue',
    // borderWidth: 5,
    // flex: 1,
    // aspectRatio: 1.5,
  }
})

export default BoxImage;