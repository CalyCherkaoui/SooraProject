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
      </View>
      <View style={styles.inputContainer}>
        <TextInput placeholder="here!..." style={styles.TextInput} />
        <Button title='click here!' />
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
  textLogo: {
    fontSize: 16
  },
  textCoomingSoon: {
    color: 'blue',
  },
  textHeroTitle: {
    fontSize: 20,
  },
  boxB:{
    backgroundColor: 'pink',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  TextInput: {
    borderWidth: 1,
    borderColor: 'black',
    width: '60%'
  }
});
