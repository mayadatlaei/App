// import { ScrollView, StyleSheet, Text, View, Image, Pressable ,TouchableOpacity} from 'react-native'
// import React from 'react'
// import FotoCollage from '@/src/screens/FotoCollage'
// import dataItem, { category } from '../assets/data'
// import CardItem from '@/components/CardItem'
// import GellaryData from '@/assets/GellaryData'
// import Gellary from '@/components/Gellary'
// import { useNavigation } from 'expo-router'
// import { Ionicons } from '@expo/vector-icons'
// const index = () => {

//   const nav = useNavigation()
// const goToCartsScreen= () => {
// nav.navigate('cart')
// }
//   const renderComponent = () => {
//     return category.map((item) => {
//       const cat = item.catName
//       return (
//         <Pressable style={styles.card} onPress={() => nav.navigate('categoryItem', item)}>
//           <Text style={styles.ime}>{item.catName}</Text>
//           <Image style={styles.img} source={item.catImage} />
//         </Pressable>
//       )
//     })
//   }


//   const renderGellry = () => {
//     return GellaryData.map((item) => (
//       <Gellary item={item} />
//     ))
//   }

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.headerText}>Shein</Text>
//         <TouchableOpacity onPress={goToCartsScreen}>
//         <Ionicons style={styles.cart} name='cart-outline' size={36} color={'red'} />

//         </TouchableOpacity>
//       </View>


//       <ScrollView horizontal>
//         {renderGellry()}
//       </ScrollView>
//       <ScrollView>
//         {renderComponent()}
//       </ScrollView>

     
//     </View>
//   )
// }

// export default index

// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   },
//   header: {
//     backgroundColor: 'blue',
//     padding: 10,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",

//   },
//   headerText: {
//     color: 'white',
//     textAlign: 'center',
//     fontSize: 25,
//     color: "red"

//   },
//   card: {
//     width: "60%",
//     height: 100,
//     borderWidth: 3,
//     borderColor: "blue",
//     alignSelf: "center",
//     borderRadius: 35,
//     margin: 10,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-around"
//   },
//   ime: {
//     color: "black",
//     fontSize: 20
//   },
//   img: {
//     width: 70,
//     height: 70,
//     borderRadius: 50
//   }
// })


import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

setTimeout(() => {
  router.replace("/loginAuth")//login
}, 2000 )

const index = () => {
  return (
    <View>
      <Text>loading</Text>
    </View>
  )
}

export default index

const styles = StyleSheet.create({})