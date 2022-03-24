import React from 'react'
import { StyleSheet, Text, View,StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import StackNavigations from './src/navigations/StackNavigations';


const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#ffffff"
        barStyle='dark-content'
         />
      <NavigationContainer>
        <StackNavigations />
        </NavigationContainer>
    </View>
  )
}
export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fffff'
  }
})
