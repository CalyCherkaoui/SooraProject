import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.boxA}>
        <Text style={styles.textLogo}>Soora</Text>
        <Button title='Contact us' />
      </View>
      <View style={styles.boxB}>
        <Text style={styles.textCoomingSoon}>Comming Soon</Text>
        <Text style={styles.textHeroTitle}>Bringing Muslims Together</Text>
        <View style={styles.boxB3}>
          <Text>GooglePlay</Text>
          <Text>AppStore</Text>
        </View>
      </View>
      <View style={styles.boxImages}>
        <Text>Image</Text>
      </View>
      <View style={styles.boxB}>
        <Text style={styles.textCoomingSoon}>Comming Soon</Text>
        <Text style={styles.textHeroTitle}>Get Notifiyed When we Launch</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput placeholder="..." style={styles.TextInput} />
        <Button title='Notify Me' />
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
    padding: 10
  },
  boxA:{
    backgroundColor: 'yellow',
  },
  boxB:{
    backgroundColor: 'pink',
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
  boxB3: {
    backgroundColor: 'gray',
  },
  boxImages: {
    backgroundColor: 'orange',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    backgroundColor: 'green'
  },
});
