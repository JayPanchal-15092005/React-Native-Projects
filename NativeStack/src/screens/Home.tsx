import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = ({navigation}: any) => {
  return (
    <View style={styles.container}>   
      <Text style={styles.homeBtn}>Home</Text>
      <Button title='Profile' onPress={() => navigation.navigate("Profile", {id: 1, name: "Jay"})}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    homeBtn: {
        fontSize: 20,
        fontWeight: "500",
        marginBottom: 10
    },
    
})

export default Home;