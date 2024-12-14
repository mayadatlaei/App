import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'



const CardItem = (props : any) => {

    const nav = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.tex}>{props.name}</Text>
                <Text style={styles.ime}>{props.price + ' ' + '$'}</Text>
            </View>
            <Pressable onPress={() => {nav.navigate('productDescr', {...props})}}>
                <Image style={styles.pic} source={props.img} />
            </Pressable>

        </View>
    )
}

export default CardItem

const styles = StyleSheet.create({
    pic: {
        width: 160,
        height: 120,
        marginLeft: 'auto',
        resizeMode: 'cover',
        borderRadius:10
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderColor:"blue",
        borderWidth:3,
        margin:5,
        borderRadius:50,
    },
    tex: {
        fontSize: 22
    },
    ime: {
        fontSize: 19
    },
    card:{

    }
})