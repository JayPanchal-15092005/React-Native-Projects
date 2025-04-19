import {StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreens from './src/screens/HomeScreen'

const App = () => {
  return (
    <View style={{flex: 1, backgroundColor: "white"}}>
      <HomeScreens />
    </View>
  )
}

const styles = StyleSheet.create({})

export default App;