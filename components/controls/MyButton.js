import React from 'react'
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'

export default function MyButton(props) {
    return (
        <View>
            <View style={styles.buttonContainer}>
            <Text style={styles.textStyle}>{props.buttonArgs.buttonText}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        height: 60,
        width: 230,
        borderRadius: 30,
        backgroundColor: "#BE8A51",
        justifyContent: "center",
        alignItems: "center"
    },

    textStyle: {
        fontSize: 20,
        color: "black"
    }
})
