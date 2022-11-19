import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.boxNavigation}>
        <Text style={styles.textLogo}>Soora</Text>
        <Button title='Contact us' />
      </View>
      <View style={styles.boxDisplay}>
        <Text style={styles.textCoomingSoon}>Comming Soon</Text>
        <Text style={styles.textHeroTitle}>Bringing Muslims Together</Text>
        <View style={styles.boxStores}>
          <Text>GooglePlay</Text>
          <Text>AppStore</Text>
        </View>
      </View>
      <View style={styles.boxImages}>
        <Text>Image</Text>
      </View>
      <View style={styles.boxDisplay}>
        <Text style={styles.textCoomingSoon}>Comming Soon</Text>
        <Text style={styles.textHeroTitle}>Get Notifiyed When we Launch</Text>
      </View>
      <View style={styles.BoxInput}>
        <View style={styles.inputContainer}>
          <TextInput placeholder="..." style={styles.TextInput} />
          <Button title='Notify Me' />
        </View>
        <Text style={styles.inputNote}>Don't worry, we won't spam you </Text>
      </View>
      <View style={styles.boxImages}>
        <Text>Image</Text>
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
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: 'green',
  },
  boxNavigation:{
    backgroundColor: 'yellow',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  boxDisplay:{
    backgroundColor: 'pink',
    padding: 12,
  },
  textLogo: {
    fontSize: 16
  },
  textCoomingSoon: {
    color: 'blue',
  },
  textHeroTitle: {
    fontSize: 20,
  },
  boxStores: {
    backgroundColor: 'gray',
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
    backgroundColor: 'grey',
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
