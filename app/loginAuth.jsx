import { ActivityIndicatorBase, Button, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { router, useNavigation } from 'expo-router'
import { logIn } from '@/res/api'

const login = () => {
    const nav = useNavigation()
    const [phone, setphone] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setIsLoading] = useState(false)

    const loginUserX = async () => {
        setIsLoading(true)
        try {
            const response = await logIn({ phone, password })
            console.log("response is", response);

            // console.log("response id", response);

            // if (response.success === true) {
            //     router.replace("/home")

            // } else {
            //     alert("faild to log in")
            // }
            setIsLoading(false)
        }
        catch (e) {
            setIsLoading(false)
            console.log("erorr", e);
            alert("server error")
        }
    }

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
                <ActivityIndicatorBase size={"large"} color={"red"} />
                <Text>Loading...</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.logTxt}>Log In</Text>

                <TextInput
                    placeholder='phone'
                    style={styles.input}
                    onChangeText={setphone}
                    value={phone}
                />
                <TextInput
                    placeholder='password'
                    style={styles.input}
                    onChangeText={setPassword}
                    value={password}
                />
                <TouchableOpacity onPress={loginUserX} >
                    <Text style={styles.LogIn}>logIn</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => nav.navigate("CreatUser")}>
                    <Text style={styles.User}>CreatUser</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        backgroundColor: "#FFDFEF"
    },
    logBtn: {
        fontSize: 30,
        marginBottom: 30
    },
    userName: {
        fontSize: 25,

    },
    input: {
        height: 40,
        borderWidth: 1,
        padding: 15,
        marginBottom: 25,
        width: "100%"
    },
    LogIn: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: "80%",
        borderRadius: 30,
        textAlign: 'center'

    },
    User: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: "80%",
        borderRadius: 30,
        textAlign: "center",
    },
    form: {
        backgroundColor: "#A9B5DF",
        width: "80%",
        borderRadius: 20,
        padding: 15
    },
    logTxt: {
        textAlign: "center",
        fontSize: 50,

    }

})