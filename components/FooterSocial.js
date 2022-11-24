import React from 'react';
import {
  StyleSheet, View, TouchableOpacity, Image,
} from 'react-native';

function FooterSocial() {
  return (
      <View style={styles.footerSocialMedia}>
        <TouchableOpacity style={styles.footerIconBox}>
          <Image
            source={require('../assets/images/facebook.png')}
            style={styles.footerIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerIconBox}>
          <Image
            source={require('../assets/images/twitter.png')}
            style={styles.footerIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerIconBox}>
          <Image
            source={require('../assets/images/instagram.png')}
            style={styles.footerIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerIconBox}>
          <Image
            source={require('../assets/images/tiktok.png')}
            style={styles.footerIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerIconBox}>
          <Image
            source={require('../assets/images/youtube.png')}
            style={styles.footerIconStyle}
          />
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  footerSocialMedia: {
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#1E1E1E',
  },
  footerIconBox: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 100,
    marginHorizontal: 5,
  },
  footerIconStyle: {
    resizeMode: 'contain',
    width: 24,
    height: 24,
  },
});

export default FooterSocial;