import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const Example = () => {
    const [x, setx] = useState(0)
    const add = () => {
        setx(x + 1) 
    }
    const add2 = () => {
        if (x>0)
        setx(x - 1)
    }
    return (
        <View>
            <Text style={styles.Text}>mayada</Text>
            <Text style={styles.person}>{x}</Text>
            <View style={styles.view}>
                <Button title='+' onPress={add} />
                <Button title='-' onPress={add2}/>
            </View>
        </View>
    )
}

export default Example

const styles = StyleSheet.create({
    Text: {
        color: "white",
        marginTop: 50,
        marginLeft: 50,
        fontSize: 40
    },
    person: {
        color: "gray",
        margin: 30,
        fontSize: 30
    },
    view: {
        flexDirection: "row",
        justifyContent:'space-between',
        paddingHorizontal:20,
        marginRight:250
    }
})