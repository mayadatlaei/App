import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Gellary = ({item}:any) => {
  return (
    <View>
              <Image style={styles.pic} source={item.img}/>

      <Text style={styles.name}>{item.name}</Text>
    </View>
  )
}

export default Gellary

const styles = StyleSheet.create({
    pic:{
        width:380,
        height:300,
        resizeMode:'cover',
        borderRadius:100,
        
    },
    name:{
      backgroundColor:'blue',
      color:'white',
      marginLeft:30,
      position:'absolute',
      marginTop:20,
      fontSize:25

    }

})