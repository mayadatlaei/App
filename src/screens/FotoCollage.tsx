import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import Images from '@/assets/images/Images'

const FotoCollage = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.logo}>shein</Text>
                <Ionicons style={styles.cart} name='cart-outline' size={20} color={'gray'} />
                <Ionicons name='pricetags-outline' size={40} color={'yellow'} />
            </View>
            <Image source={Images.mayada} style={styles.img} />
            <Text >50.55$</Text>
            <Image source={Images.camera} style={styles.img} />
            <Text>30.99$</Text>
            <Image source={Images.search} style={styles.img} />
            <Text>67.89$</Text>

            <View>
                <Image source={Images.secret} style={styles.shien} />
                <Text>35.77$</Text>
                <Image source={Images.pantes} />
                <Text>30.50$  </Text>
            </View>
        </View>
    )
}

export default FotoCollage

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        marginTop: 40

        
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: "90%",
        borderWidth: 1
    },
    logo: {
        fontSize: 30,
        color: 'black'
    },
    cart: {
        marginLeft: 100
    },
    img: {
        width: 90,
        height: 90,
        marginTop: 90


    },
    shien: {
        width: 50,
        height: 50,


    }


})