import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const WhatsappItem = (props: any) => {
  const { name, message, time, image } = props
  return (
    <View style={styles.style7}>
      <Image resizeMode='contain' style={styles.Image34} source={{ uri: image }}/>
      <View style={styles.style10}>
        <Text style={styles.people}>{name}</Text>

        <Text style={styles.style7}>{message}</Text>
      </View>
      <Text style={styles.style15}>{time}</Text>
    </View>
  )
}

export default WhatsappItem

const styles = StyleSheet.create({
  name: {
    fontSize: 30,
    color: "green",
  },
  style7: {
    margin: 3,
    color: "gray",
    flexDirection: "row",
    marginLeft: 30,
    fontSize: 15,
    marginBottom: 13,
    alignItems: "flex-start"
  },
  style10: {
    flexDirection: "column",
  },
  style15: {
    marginTop: 25,
    color: "white",
    fontSize: 21,
    position: "absolute",
    right: 10

  },
  Image34: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginTop: 8
  },
  people: {
    color: "white",
    fontSize: 21,
    marginLeft: 30,
  },
})