import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'
import images from '../../assets/images/Images'
import Images from '../../assets/images/Images'
import WhatsappItem from '@/components/whatsappItem'
import { people } from '@/assets/data'
const WhatsApp = () => {
  const renderchat = () => {
    const cards = people.map((person, index) => <WhatsappItem name={person.name}
      image={person.image} message={person.message} />)
    return cards
  }
  return (
    <View>
      <View style={styles.style1} >
        <Text style={styles.style}>WhatsApp </Text>
        <View style={styles.icons}>
          <Image resizeMode='contain' style={styles.style67} source={Images.search} />
          <Image resizeMode='contain' style={styles.camera} source={Images.camera} />
        </View>
      </View>
      <View style={styles.box}>
        <TextInput placeholderTextColor="white" style={styles.people} placeholder="search" />
      </View>
      <ScrollView style={styles.scroll}>
        {/* <WhatsappItem name={"mom"} message={"....."} time={"12:30"} image={{ uri: "https://i.pinimg.com/236x/75/e6/95/75e6957688804b9ab053dfa2eadea941.jpg" }} />
        <WhatsappItem name={"dad"}  message={"yamen"} time={"13:00 "} image={{uri:"https://images.photowall.com/products/54866/horses-3.jpg?h=699&q=85"}}/>
        <WhatsappItem name={"mageda"} message={"tea"} time={"17:59"} image={{uri:"https://iadsb.tmgrup.com.tr/7ddb86/0/0/0/0/1926/1086?u=https://idsb.tmgrup.com.tr/2018/05/22/horses-the-wings-of-mankind-1527015927739.jpg"}}/>
        <WhatsappItem name={"best friend"} message={"yasmen"} time={"00:00"} image={{uri:"https://i.pinimg.com/236x/6d/f3/1d/6df31d80efd54675a3dec3e2237a623a.jpg"}}/>
        <WhatsappItem name={"brother"} message={"800"} time={"11:46"} image={{uri:"https://i.ytimg.com/vi/B0Ay3_vdt5s/hqdefault.jpg"}}/> */}
        {renderchat()}
      </ScrollView>
    </View>


  )
}
export default WhatsApp

const styles = StyleSheet.create({
  style: {
    color: "green",
    fontSize: 35,
  },

  people: {
    color: "white",
    fontSize: 21,
    marginLeft: 30,
  },
  style15: {
    marginTop: 25,
    color: "white",
    fontSize: 21,
    position: "absolute",
    right: 10

  },
  style67: {
    width: 30,
    height: 30,
    marginRight: 10
  },
  camera: {
    width: 30,
    height: 30,
  },
  style1: {
    height: 50,
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",


  },
  box: {
    borderWidth: 2,
    width: "80%",
    height: 50,
    borderColor: "white",
    alignSelf: "center",
    justifyContent: "center",
    padding: 8,
    borderRadius: 30
  },
  icons: {
    flexDirection: 'row',
    margin: 10,
    paddingRight: 10,
    alignItems: "center",
  },
  scroll: {
    width: "90%",
    padding: 10,
    alignSelf: "center",
    height: "80%"
  }

})