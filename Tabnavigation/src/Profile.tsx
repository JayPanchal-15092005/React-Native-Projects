import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profile = ({navigation, route}: any) => {

//   const {id, name} = route.params

  return (
    <View style={styles.container}>
      <Text style={styles.ProfileBtn}>Profile</Text>
      <Text style={styles.ProfileBtn}> </Text>
      <Button title='Search' onPress={() => navigation.navigate("Search")} />
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
    ProfileBtn: {
        fontSize: 20,
        fontWeight: "500",
        // marginBottom: 10
    },
})

export default Profile;