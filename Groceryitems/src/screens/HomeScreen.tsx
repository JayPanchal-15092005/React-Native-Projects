import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Allitems from './AllItems'
import CreateScreens from './CreateScreen'
import LowStock from './LowStock'

const HomeScreens = (): React.JSX.Element => {

    const [view, setView] = useState(0)
    const [data, setData] = useState([
      {id: 1, name: "Wheat", stock: 5, unit: "kg"},
      {id: 2, name: "Rice", stock: 15, unit: "kg"},
      {id: 3, name: "Basmati Rice", stock:25, unit: "kg"},
      {id: 4, name: "Pulse", stock: 50, unit: "kg"},
      {id: 5, name: "Corn", stock: 19, unit: "kg"},
    ])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
       <View style={styles.buttonContainer}>
        <Pressable 
        style={[styles.button, view === 0 ? {backgroundColor: "#75DA8B"}: null]} 
        onPress={() => setView(0)}>
            <Text style={[styles.btnText, view === 0 ? {color: "#2C3335"}: null]}>All Items</Text>
        </Pressable>
        <Pressable style={[styles.button, view === 1 ? {backgroundColor: "#75DA8B"}: null]} onPress={() => setView(1)}>
            <Text style={[styles.btnText,  view === 1 ? {color: "#2C3335"}: null]}>Low Stock Items</Text>
        </Pressable>
        <Pressable style={[styles.button, view === 2 ? {backgroundColor: "#75DA8B"}: null]} onPress={() => setView(2)}>
            <Text style={[styles.btnText, view === 2 ? {color: "#2C3335"}: null]}>Create</Text>
        </Pressable>
       </View>

        {view === 0 && <Allitems data={data} />}
        {view === 1 && <LowStock
        data={data.filter((item) => item.stock < 20)}/>}
        {view === 2 && <CreateScreens data={data} setData={setData} />}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
      backgroundColor: "white",
    },
    title: {
      fontSize: 24,
      fontWeight: "600",
      color: "#2B2B52",
      marginVertical: 10,
      marginHorizontal: 118,
      marginBottom: 10,
    },
    buttonContainer: {
      flexDirection: "row",
      gap: 20,
      marginBottom: 15,
      paddingHorizontal: 10,
    },
    button: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 50,
        borderWidth: 1,
        backgroundColor: "#DAE0E2",
        // borderColor: "#7CEC9F"
    },
    btnText: {
        color: "black",
        fontSize: 12,
      // paddingHorizontal: 10,
        marginHorizontal: 10,

    }
  })

export default HomeScreens;