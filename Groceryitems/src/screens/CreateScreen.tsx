import { Pressable, StyleSheet, Text, TextInput, View, FlatList } from 'react-native'
import React, { useState } from 'react'

const CreateScreens = ({data, setData}: any) => {

  const [itemName, setItemName] = useState('')
  const [stockAmount, setStockAmount] = useState('')
  const [isEdit, setIsEdit] = useState(false)
  const [editItemId, setEditItemId] =  useState(null)

  const addItemsHandler = () => {

    const newItemData = {
      id: Date.now(),
      name: itemName,
      stock: stockAmount,
    }

    setIsEdit(false)
    setData([...data, newItemData])
    setItemName('')
    setStockAmount('')
  }

  const deleteItemHandler = (id: any) => {
    setData(data.filter((item: any) => item.id !== id))
  }

  const editItemHandler = (item: any) => {
    setIsEdit(true)
    setItemName(item.name);
    setEditItemId(item.id);
  }

  const updateItemsHandler = () => {
    setData(data.map((item: any) => (
      item.id === editItemId ? {...item, name: itemName, stock: stockAmount} : item
    )))
  }

  return (
    <View style={styles.Container}>
      <TextInput
      placeholder='Enter an Items name...'
      placeholderTextColor="black"
      value={itemName}
      onChangeText={(item) => setItemName(item)}
      style={styles.input}
      keyboardType='default'
      />
      <TextInput
      placeholder='Enter Stock amount (eg. 2)'
      placeholderTextColor="black"
      value={stockAmount}
      onChangeText={(item) => setStockAmount(item)}
      style={styles.input}
      keyboardType='numeric'
      />

      <Pressable 
      style={styles.addbutton}
      onPress={() => isEdit ? updateItemsHandler(): addItemsHandler()}
      >
        <Text>{isEdit ? `Edit Items` :`Add Items`}</Text>
      </Pressable>


      // This is in the AllItems Components /// 

       <View style={{marginTop: 10}}>
            <View style={styles.headingContainer}>
              <Text style={styles.headingTxt}>All Items in the Stock</Text>
            </View>
      
            <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
              <View style={
                [styles.itemContainer, 
                 {backgroundColor: item.stock < 20 ? "#FF4848": "#7CEC9F"}
                ]}>
                 <Text style={styles.itemTxt}>{item.name}</Text>
                 <View style={{flexDirection: "row",gap: 20,}}>
                 <Text style={styles.itemTxt}>{item.stock}</Text>
                 <Pressable onPress={() => editItemHandler(item)}>
                    <Text style={styles.editBtn}>Edit</Text>
                 </Pressable>
                  <Pressable onPress={() => deleteItemHandler(item.id)}>
                    <Text style={styles.deleteBtn}>Delete</Text>
                  </Pressable>
                 </View>
              </View>
            )}
            contentContainerStyle={{gap: 8}}
      
            />
      
          </View>

    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    paddingHorizontal: 10,
    gap: 9,
    paddingVertical: "4%",
  },
  input: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
  },
  addbutton: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#45CE30",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  btnTxt: {
    color: "#616C6F",
    fontWeight: "500",
    fontSize: 14,
  }, 
  editBtn: {
    fontSize: 15,
    fontWeight: "400",
    backgroundColor: "#75DA8B",
    borderRadius: 8,
    borderWidth: 1,
    // marginHorizontal: 10,
    paddingHorizontal: 10,
    color: "#0A3D62"
  },
  deleteBtn: {
    fontSize: 15,
    fontWeight: "400",
    backgroundColor: "#FF4848",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 8,
    color: "#4C4B4B",
  },

  ///   This Style is the in the AllItems Components 


  headingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  headingTxt: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: "#F9DDA4",
    color: "#47535E"
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 8,
  },
  itemTxt: {
    fontSize: 13,
    fontWeight: "400",
  }
  /////
})


export default CreateScreens;