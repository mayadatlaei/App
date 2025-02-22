import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { router, useNavigation } from 'expo-router'
import {creatUsers} from '../res/api'
const CreatUser = () => {
    
    const nav = useNavigation()
    const [phone, setphone] = useState("")
    const [password, setPassword] = useState("")
    const [email , setEmail] =useState("")
    const [userName , setusername] =useState("")
    const regiisterUser=()=>{
        const body={
            userName:userName,
            email:email,
            phone:phone,
            password:password
        }
        // console.log(body);

        creatUsers(body)
        .then((Response)=>{
            console.log("res",Response);
            
            if(Response.success==true)
            {
                nav.navigate("home")
            }
            else
            {
            alert(Response?.error)
            }
        })
       }
  return (
    <View style={styles.create}>
      <Text>CreatUser</Text>
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
            <TextInput
                placeholder='email'
                style={styles.input}
                onChangeText={setEmail}
                value={email}
            />
            <TextInput
                placeholder='userName'
                style={styles.input}
                onChangeText={setusername}
                value={userName}
            />
            <TouchableOpacity onPress={regiisterUser}> 
                <Text style={styles.User}>CreatUser</Text>
            </TouchableOpacity>
    </View>
  )
}

export default CreatUser

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: "80%"
    },
    create:{
        flix:1
    },
    User:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: "80%",
        borderRadius:30
    }
})