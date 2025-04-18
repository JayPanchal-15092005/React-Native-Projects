import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React from 'react'
import FlatCards from './components/FlatCards';
import ElevatedCard from './components/ElevatedCard';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white"}}>
      <ScrollView>
              <FlatCards />
              <ElevatedCard />
              <FancyCard />
              <ContactList />
              <ActionCard />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App