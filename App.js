import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import BoxImage from './components/BoxImage';
import HeroTitle from './components/HeroTitle';
import TextComingSoon from './components/TextComingSoon';
import BoxImage2 from './components/BoxImage2';
import ContactUsButton from './components/ContactUsButton';
import BoxStoresImages from './components/BoxStoresImages';
import InputEmail from './components/InputEmail';

export default function App() {
  return (
    <ScrollView style={styles.appContainer}>
      <View style={styles.boxNavigation}>
        <Image
          source={require('./assets/images/logo1.png')}
          style={styles.imgLogo}
        />
        <ContactUsButton />
      </View>
      <View style={styles.boxDisplay}>
        <TextComingSoon />
        <HeroTitle myText={"Bringing\nMuslims Together"} />
        <BoxStoresImages />
      </View>
      <View style={styles.boxImages}>
        <BoxImage2 />
      </View>
      <View style={styles.boxDisplay}>
        <TextComingSoon />
        <HeroTitle myText={"Get Notifiyed\nWhen we Launch"} />
      </View>
      <View style={styles.BoxInput}>
        <InputEmail />
        <Text style={styles.inputNote}>Don't worry, we won't spam you </Text>
      </View>
      <View style={styles.boxImages}>
        <BoxImage />
      </View>
      <View style={styles.footerContainer}>
        <View style={styles.footerSocialMedia}>
          <Text>Facebook Twitter</Text>
        </View>
        <View style={styles.footerCopyrights}>
          <Text>Copyright 2022 Soora. All rights reserved</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 40,
    // backgroundColor: 'green',
    flexDirection: 'column',
  },
  boxNavigation:{
    // backgroundColor: 'yellow',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    height: 32,
    paddingLeft: 20,
    paddingRight: 20,
  },
  boxDisplay:{
    // backgroundColor: 'pink',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 60,
    justifyContent: 'center'
  },
  imgLogo: {
    resizeMode: "contain",
    height: 16,
    width: 75,
  },
  textCoomingSoon: {
    color: 'blue',
    fontFamily: 'Inter-Regular',
  },
  // boxImages: {
  //   // backgroundColor: 'orange',
  // },
  BoxInput: {
    backgroundColor: 'powderblue',
    alignContent: 'center',
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'powderblue',
  },
  inputNote: {
    backgroundColor: 'yellow',
  },
  TextInput: {
    borderWidth: 1,
    borderColor: 'black',
    width: '60%'
  },
  footerContainer: {
    backgroundColor: 'blue',
  },
  footerSocialMedia: {
    backgroundColor: 'red',
  },
  footerCopyrights: {
    backgroundColor: 'green',
  },
});
