import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image} from 'react-native';
import { PageScrollView } from 'pagescrollview';
import BoxImage from './components/BoxImage';
import HeroTitle from './components/HeroTitle';
import TextComingSoon from './components/TextComingSoon';
import BoxImage2 from './components/BoxImage2';
import ContactUsButton from './components/ContactUsButton';
import BoxStoresImages from './components/BoxStoresImages';
import InputEmail from './components/InputEmail';
import Footer from './components/Footer';

export default function App() {
  return (
    <PageScrollView style={styles.appContainer} useWindowScrolling={true}>
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
      </View>
      <View style={styles.boxImages}>
        <BoxImage />
      </View>
      <Footer />
      <StatusBar style="auto" />
    </PageScrollView>
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
    // backgroundColor: 'powderblue',
    alignContent: 'center',
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'powderblue',
  },
  TextInput: {
    borderWidth: 1,
    borderColor: 'black',
    width: '60%'
  },
  // footerContainer: {
  //   backgroundColor: 'blue',
  // },
  // footerSocialMedia: {
  //   backgroundColor: 'red',
  // },
  // footerCopyrights: {
  //   backgroundColor: 'green',
  // },
});
