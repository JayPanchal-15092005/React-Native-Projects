import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/Home';
import Profile from './src/Profile';
import Search from './src/Search';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const Tab = createBottomTabNavigator()

function Tabnavigator(){
  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={
      {
        // tabBarActiveBackgroundColor: "#25CCF7",
        tabBarLabelStyle: {
          fontSize: 15
        },
        tabBarStyle: {
          height: 60
        }
      }
    }>
      <Tab.Screen 
      name='Home' 
      component={Home} 
      options={{
        // headerShown: false, 
        // tabBarActiveBackgroundColor: "Red",
        // tabBarActiveTintColor: "red"
        tabBarIcon: () => (
          <AntDesign name='home' size={25} color={"black"} />
        )
        }} />

      <Tab.Screen 
      name='Profile' 
      component={Profile}
      options={
        { 
          tabBarIcon: () => (
            <Feather name='user' size={25} color={"black"} />
          )
        }
      }
      />
      <Tab.Screen 
      name='Search' 
      component={Search}
      options={{
        tabBarIcon: () => (
          <EvilIcons name='search' size={25} color={"black"} />
        )
      }}
      />
    </Tab.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Tabnavigator />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})

export default App;