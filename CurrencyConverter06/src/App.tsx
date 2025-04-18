import { FlatList, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
// constants
import { currencyByRupee } from './constants';
// Component
import CurrencyButtons from './components/CurrencyButtons';

import Snackbar from 'react-native-snackbar';

function App(): React.JSX.Element {

  const [inputValue, setInputValue] = useState('')
  const [resultValue, setResultValue] = useState('')
  const [targetCurrency, setTargetCurrency] = useState('')

  const buttonPressed = (targetValue: Currency) => {
    if (!inputValue) {
      return Snackbar.show({
        text: "Enter a value to convert",
        backgroundColor: "#E8290B",
        textColor: "white",
      })
    }

    const inputAmount = parseFloat(inputValue)
    if (!isNaN(inputAmount)) {
      const convertedValue = inputAmount * targetValue.value
      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)}`
      setResultValue(result);
      setTargetCurrency(targetValue.name)
    } else {
      return Snackbar.show({
        text: "Not a valid number to convert",
        backgroundColor: "#E83350",
        textColor: "white",
      })
    }
  }

  return (
    <>
      <StatusBar />
      <View style={styles.container}>
          <View style={styles.topContainer}>
            <View style={styles.rupeesContainer}>
              <Text style={styles.rupee}>₹</Text>
              <TextInput
              maxLength={14}
              style={styles.testInput}
              value={inputValue}
              clearButtonMode='always' // This is only for the IOS(ios)
              onChangeText={setInputValue}
              keyboardType='number-pad'
              placeholder='Enter amount in the Indian Ruppess to Convert'
              />
            </View>
            {resultValue && (
              <Text style={styles.resultTxt}>
                {resultValue}
              </Text>
            )}
          </View>
          <View style={styles.bottomContainer}>
              <FlatList
              numColumns={2}
              data={currencyByRupee}
              keyExtractor={item => item.name}
              renderItem={({item}) => (
                <Pressable
                style={[
                  styles.button,
                  targetCurrency === item.name && styles.selected
                ]}
                onPress={() => buttonPressed(item)}
                >
                  <CurrencyButtons {...item}/>
                </Pressable>
              )}
              />
          </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#487EB0',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    fontSize: 32,
    color: '#2B2B52',
    fontWeight: '800',
  },
  rupee: {
    marginRight: 8,
    // color: "black"
    fontSize: 22,
    color: 'white',
    fontWeight: '800',
  },
  testInput: {
    color: "#FFF222",
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,
    margin: 12,
    marginBottom: 20,
    height: 60,
    borderRadius: 40,
    backgroundColor: '#fff',
    elevation: 20,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#4BCFFA',
  },
});

export default App;