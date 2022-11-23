import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, FlatList} from 'react-native';
import BoxNavigation from './views/BoxNavigation';
import BoxDisplay1 from './views/BoxDisplay1';
import BoxImageA from './views/BoxImageA';
import BoxDisplay2 from './views/BoxDisplay2';
import BoxInput from './views/BoxInput';
import BoxImageB from './views/BoxImageB';
import BoxFooter from './views/BoxFooter';


export default function App() {

  const componentsList = [
    { id: 0, compo: <BoxNavigation />},
    { id: 1, compo: <BoxDisplay1 />},
    { id: 2, compo: <BoxImageA />},
    { id: 4, compo: <BoxDisplay2 />},
    { id: 5, compo: <BoxInput />},
    { id: 6, compo: <BoxImageB />},
    { id: 7, compo: <BoxFooter />},
  ];

  return (
    <SafeAreaView style={styles.appContainer}>
      <FlatList
        data={componentsList}
        keyExtractor = {item => item.id}
        renderItem={
          ({item}) => {
            return(
              <>{item.compo}</>
            )
          }
        }
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    flexDirection: 'column',
  },
});
