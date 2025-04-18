import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import type { PropsWithChildren } from 'react';

type CurrencyButtonsProps = PropsWithChildren<{
    name: string;
    flag: string;
}>

const CurrencyButtons = (props: CurrencyButtonsProps): React.JSX.Element => {
    return (
        <View style={styles.buttonContainer}>
            <Text>{props.flag}</Text>
            <Text>{props.name}</Text>
        </View>
    )
}
 
export default CurrencyButtons;

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        alignItems: "center"
    },
    flag: {
        fontSize: 27,
        color: "white",
        marginBottom: 6,
    },
    country: {
        fontSize: 15,
        color: "#E71C23",
    }

})