import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions, Button, TouchableHighlight } from 'react-native'
import MyButton from '../controls/MyButton'

export default function Start() {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/perosn.jpg')}></Image>
            <View style={styles.textContainer}>
                <Text style={styles.textTitle}>BAKING LESSONS</Text>
                <Text style={styles.textSubTitle}>MASTER THE ART OF BAKING</Text>
            </View>
            <TouchableHighlight style={styles.buttonPosition} onPress={()=> alert("Button pressed")}>
                    <MyButton style={styles.textTitle} buttonArgs={{buttonText: "Start Learning -->"}}></MyButton>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "flex-end",
        alignContent: "flex-end"
    },

    textContainer: {
        position: "absolute",
        left: Dimensions.get("window").width/2,
        top: Dimensions.get("window").height/2 + 200,
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start"
    },

    textTitle: {
        fontSize: 35,
        color: "white"
    },

    textSubTitle: {
        fontSize: 20,
        color: "white",
        position: "absolute",
        top: 55,
    },

    buttonPosition: {
        position: "absolute",
        top: Dimensions.get("window").height - 80,
        left: Dimensions.get("window").width/2 + 20
    }
})
