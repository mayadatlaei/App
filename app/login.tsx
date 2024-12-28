import { Button, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { logIn } from '@/res/api'
import { router } from 'expo-router'

const login = () => {
    const [userName, setUsername] = useState("mayada")
    const [password, setPassword] = useState("123456768")

    const loginUser = async () => {
        const response = await logIn({userName, password})
        console.log(response);
        
        if (!response) {
            // error message
        } else {
            router.replace("/home")
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={loginUser} >
                <Text style={styles.logBtn}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

export default login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    logBtn: {
        fontSize: 30
    }
})