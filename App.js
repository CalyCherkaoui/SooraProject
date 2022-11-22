import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, FlatList} from 'react-native';
// import { PageScrollView } from 'pagescrollview';
// import BoxImage from './components/BoxImage';
// import HeroTitle from './components/HeroTitle';
// import TextComingSoon from './components/TextComingSoon';
// import BoxImage2 from './components/BoxImage2';
// import ContactUsButton from './components/ContactUsButton';
// import BoxStoresImages from './components/BoxStoresImages';
// import InputEmail from './components/InputEmail';
import Footer from './components/Footer';
import BoxNavigation from './views/BoxNavigation';
import BoxDisplay1 from './views/BoxDisplay1';
import BoxImageA from './views/BoxImageA';
import BoxDisplay2 from './views/BoxDisplay2';
import BoxInput from './views/BoxInput';
import BoxImageB from './views/BoxImageB';


export default function App() {

  const componentsList = [
    <BoxNavigation />,
    <BoxDisplay1 />,
    <BoxImageA />,
    <BoxDisplay2 />,
    <BoxInput />,
    <BoxImageB />,
    <Footer />
  ];

  return (
    <SafeAreaView style={styles.appContainer}>
      <FlatList
        data={componentsList}
        renderItem={
          (item) => {
            return item
          }
        }
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 30,
    flexDirection: 'column',
  },
});
