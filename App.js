import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, Image } from 'react-native';
import BoxImage from './components/BoxImage';
import HeroTitle from './components/HeroTitle';
import TextCoomingSoon from './components/TextCommingSoon';
import BoxImage2 from './components/BoxImage2';
import ContactUsButton from './components/ContactUsButton';
import BoxStoresImages from './components/BoxStoresImages';

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
        <TextCoomingSoon />
        <HeroTitle myText={"Bringing\nMuslims Together"} />
        {/* <View style={styles.boxStores}>
          <Text>GooglePlay</Text>
          <Text>AppStore</Text>
        </View> */}
        <BoxStoresImages />
      </View>
      <View style={styles.boxImages}>
        <BoxImage2 />
      </View>
      <View style={styles.boxDisplay}>
        <TextCoomingSoon />
        <HeroTitle myText={"Get Notifiyed\nWhen we Launch"} />
      </View>
      <View style={styles.BoxInput}>
        <View style={styles.inputContainer}>
          <TextInput placeholder="..." style={styles.TextInput} />
          <Button title='Notify Me' />
        </View>
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
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    backgroundColor: 'green',
    flexDirection: 'column',
  },
  boxNavigation:{
    backgroundColor: 'yellow',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    height: 32,
    paddingLeft: 20,
    paddingRight: 20,
  },
  boxDisplay:{
    backgroundColor: 'pink',
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
  boxStores: {
    backgroundColor: 'skyblue',
  },
  boxImages: {
    backgroundColor: 'orange',
  },
  BoxInput: {
    backgroundColor: 'white',
    alignContent: 'center',
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
