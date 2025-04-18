import {SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard} from 'react-native';
import React, {useState} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

// Form validation
import * as Yup from 'yup';
import {Formik} from 'formik';

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Should be min of 4 Characters')
    .max(16, 'Should be max of 16 Characters')
    .required('Length is required for the PasswordGenerator'),
});

export default function App() {
  const [password, setPassword] = useState('');
  const [isPassGenerated, setIsPassGenerated] = useState(false);

  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUppearCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePasswordString = (passwordLength: number) => {
    let characterList = '';

    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';
    const specialChars = '!@#$%^&*()_+';

    if (upperCase) {
      characterList += upperCaseChars;
    }
    if (lowerCase) {
      characterList += lowerCaseChars;
    }
    if (numbers) {
      characterList += digitChars;
    }
    if (symbols) {
      characterList += specialChars;
    }

    const passwordResult = createPassword(characterList, passwordLength);

    setPassword(passwordResult);
    setIsPassGenerated(true);
  };

  const createPassword = (characters: string, passwordLength: number) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(characterIndex);
    }
    return result;
  };

  const resetPasswordState = () => {
    setPassword('');
    setIsPassGenerated(false);
    setLowerCase(true);
    setUppearCase(false);
    setNumbers(false);
    setSymbols(false);
  };

  return (
    <ScrollView
      style={styles.ScrollColorbackground}
      keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Password Generator</Text>
          <Formik
            initialValues= {{ passwordLength: '' }}
            validationSchema={PasswordSchema}
            onSubmit={ values => {
                console.log(values);              
                generatePasswordString(parseInt(values.passwordLength));
                Keyboard.dismiss();               
            }}
            >
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleSubmit,
              handleReset,
              /* and other goodies */
            }) => (
             <>
             <View style={styles.inputWrapper}>
                <View style={styles.inputColumn}>
                  <Text style={styles.heading}>
                    Passsword Length
                  </Text>
                  {touched.passwordLength && errors.passwordLength && (
                    <Text style={styles.errorText}>
                      {errors.passwordLength}
                    </Text>
                  )}
                </View>
                <TextInput
                  style={styles.inputStyle}
                  value={values.passwordLength}
                  onChangeText={handleChange('passwordLength')}
                  placeholder='Ex. 8'
                  keyboardType='numeric'
                  />
             </View>
             <View style={styles.inputWrapper}>
                <Text style={styles.heading}>Include lowercase</Text>
                <BouncyCheckbox
                isChecked={lowerCase}
                onPress={() => setLowerCase(!lowerCase)}
                fillColor='#2475B0'
                />
             </View>
             <View style={styles.inputWrapper}>
                <Text style={styles.heading}>Include Uppearcase latters</Text>
                <BouncyCheckbox
                isChecked={upperCase}
                onPress={() => setUppearCase(!upperCase)}
                fillColor='#F4C724'
                />
             </View>
             <View style={styles.inputWrapper}>
                <Text style={styles.heading}>Include Numbers</Text>
                <BouncyCheckbox
                isChecked={numbers}
                onPress={() => setNumbers(!numbers)}
                fillColor='#333945'
                />
             </View>
             <View style={styles.inputWrapper}>
                <Text style={styles.heading}>Include Symbols</Text>
                <BouncyCheckbox
                isChecked={symbols}
                onPress={() => setSymbols(!symbols)}
                fillColor='#8B78E6'
                />
             </View>
             <View style={styles.inputWrapper}></View>
             <View style={styles.inputWrapper}></View>
             <View style={styles.inputWrapper}></View>

             <View style={styles.formActions}>
                <TouchableOpacity
                disabled={!isValid}
                style={styles.primaryBtn}
                onPress={() => handleSubmit()}  // Please check this for the error
                >
                  <Text style={styles.primaryBtnTxt}>
                    Generate Password
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.secondaryBtn}
                onPress={() => {
                   handleReset();
                   resetPasswordState()
                }}
                >
                  <Text style={styles.secondaryBtnTxt}>
                     Reset
                  </Text>
                </TouchableOpacity>
             </View>
             </>
            )}
          </Formik>
        </View>
        {isPassGenerated ? (
          <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.subTitle}>Generated Password: </Text>
            <Text style={styles.description}>Long Press to Copy the Password
            </Text>
            <Text selectable={true} style={styles.generatedPassword}>
              {password}
            </Text>
          </View>
        ) : null}
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollColorbackground: {
    flex: 1,
    backgroundColor: "#EAF0F1",
    // color: "white",
  },
  appContainer: {
    flex: 1,
    // backgroundColor: "white"
  },
  formContainer: {
    margin: 8,
    padding: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 15,
    marginStart: 15,
  },
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2,
  },
  description: {
    color: '#758283',
    marginBottom: 8,
  },
  heading: {
    fontSize: 18,
    marginTop: 5,
  },
  inputWrapper: {
    marginBottom: 17,
    justifyContent: 'space-between',
    // alignItems: 'stretch',
    flexDirection: 'row',
  },
  inputColumn: {
    flexDirection: 'column',
    // marginTop: 10,
  },
  inputStyle: {
    padding: 8,
    width: '30%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#16213e',
    // color: "black",
    backgroundColor: "#7B8788",
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  primaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#5DA3FA',
  },
  primaryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  secondaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#CAD5E2',
  },
  secondaryBtnTxt: {
    textAlign: 'center',
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
    color: 'black',
  },
});

