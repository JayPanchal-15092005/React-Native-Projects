import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

const LowStock = ({data}: any) => {
   return (
      <View>
        <View style={styles.headingContainer}>
          <Text style={styles.headingTxt}>Items</Text>
          <Text style={styles.headingTxt}>Quantity</Text>
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
             <Text style={styles.itemTxt}>{item.stock}</Text>
          </View>
        )}
        contentContainerStyle={{gap: 8}}
  
        />
  
      </View>
    )
}

const styles = StyleSheet.create({
  headingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  headingTxt: {
    fontSize: 18,
    fontWeight: "600",
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
})

export default LowStock;