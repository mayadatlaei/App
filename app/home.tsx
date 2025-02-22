import { ScrollView, StyleSheet, Text, View, Image, Pressable, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import FotoCollage from '@/src/screens/FotoCollage'
import dataItem, { category } from '../assets/data'
import CardItem from '@/components/CardItem'
import GellaryData from '@/assets/GellaryData'
import Gellary from '@/components/Gellary'
import { useNavigation } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { findprodact } from '@/res/api'
const index = () => {
  const [data, setData] = useState([])
  const nav = useNavigation()
  const goToCartsScreen = () => {
    nav.navigate('cart')
  }
  const goToBookPage = (book) => {
    var jsonData = JSON.stringify(book)
    nav.navigate('BookPage', { data: jsonData })
  }
  const renderComponent = () => {
    return category.map((item, index) => {
      const cat = item.catName
      return (
        <Pressable key={index} style={styles.card} onPress={() => nav.navigate('categoryItem', item)}>
          <Text style={styles.ime}>{item.catName}</Text>
          <Image style={styles.img} source={item.catImage} />
        </Pressable>
      )
    })
  }

  const renderBooks = () => {
    return data.map((book, index) => (
      <TouchableOpacity onPress={() => goToBookPage(book)} style={styles.book} key={index}>
        <Text style={styles.text}>{book?.type}</Text>
        <Image source={{ uri: book.image }} style={styles.bookImage} />
      </TouchableOpacity>
    ))
  }


  const renderGellry = () => {
    return GellaryData.map((item, index) => (
      <Gellary key={index} item={item} />
    ))
  }

  const bookCollection = (data) => {
    const newdata = [];
    data.forEach((book) => {

      var typeAdd = {
        type: book.type,
        image: book.image,
        books: [book],
        about:book.about,
      }
      var found = newdata.find((element) =>
        element?.type == book?.type
      );
      if (found) {
        found?.books?.push(book);
      } else {
        newdata.push(typeAdd)
      }
    })

    // console.log(newdata);
    return newdata
  }

  const findprodactApi = () => {
    findprodact().then((res) => {
      if (res.data.length) {
        console.log(res.data);
        setData(bookCollection(res.data))
      }
      else {
        alert("no data")
      }
    })
  }

  useEffect(() => {
    findprodactApi()
  }, [])


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Shein</Text>
        <TouchableOpacity onPress={goToCartsScreen}>
          <Ionicons style={styles.cart} name='cart-outline' size={36} color={'red'} />

        </TouchableOpacity>
      </View>


      {/* <ScrollView horizontal>
         {renderGellry()} 
      </ScrollView> */}
      <ScrollView>
        {renderBooks()}
        {/* {renderComponent()} */}
      </ScrollView>



    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: 'blue',
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

  },
  headerText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
    // color: "red"

  },
  card: {
    width: "60%",
    height: 100,
    borderWidth: 3,
    borderColor: "blue",
    alignSelf: "center",
    borderRadius: 35,
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  ime: {
    color: "black",
    fontSize: 20
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 50
  },
  book: {
    // width: "80%",
    alignSelf: 'center',
    marginVertical: 10,
    borderWidth: 2,
    borderRadius: 5
  },
  bookImage: {
    height: 250,
    width: 170,
    resizeMode: 'contain',
    backgroundColor: '#000',
    borderRadius: 2
  },
  text: {
    textAlign: "center",
    fontSize: 20
  }
})