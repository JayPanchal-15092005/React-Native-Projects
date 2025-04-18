import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import Search from './src/screens/Search';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
       <Stack.Screen 
       name='Home' 
       component={Home}
       options={{
        headerShown: false
       }}
       />
       <Stack.Screen name='Profile' component={Profile} options={{ headerShown: false}} />
       <Stack.Screen name='Search' component={Search} />
    </Stack.Navigator>
  )
}

const App = () => {
  return (
   
      <NavigationContainer>
         <StackNavigator />
      </NavigationContainer>
  
  )
}

const styles = StyleSheet.create({})

export default App;