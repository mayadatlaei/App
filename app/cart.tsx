import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import ProductContext from '@/store/ProductContext'
import Images from '@/assets/images/Images'


const cart = () => {
    const { cart, setCart } = useContext(ProductContext)
    const [amount, setAmount] = useState()


    const deletItem = (name) => {
        const Filter = cart.filter(item => item.prodName !== name)
        setCart(Filter)

    }

    const calculateAmount = () => {
        var sum = 0
        cart.forEach(element => {
            sum = sum + element.prodPrice
        });

        return (
            <View style={styles.total}>
                <Text style={styles.number}>Total:{sum}</Text>
            </View>
        )
    }

    const renderCartDate = () => {

        return cart.map(item => {
            return (
                <View style={styles.view}>
                    <View style={styles.img}>
                        <Image style={styles.imag} source={item.prodImg} />
                    </View>
                    <View style={styles.text}>
                        <Text>{item.prodName}</Text>
                    </View>
                    <View>

                    <View style={styles.price}>
                        <TouchableOpacity onPress={() => deletItem(item.prodName)}>
                            <Image style={styles.trash} source={Images.trash} />
                        </TouchableOpacity>
                        <Text style={styles.txtPrice}>{item.prodPrice}</Text>
                        <Text style={styles.qty}>{item.qty}</Text>
                        </View>
                    </View>
                </View>
            )
        })
    }
    return (
        <View style={styles.contener}>
            {calculateAmount()}

            <ScrollView>
                {renderCartDate()}
            </ScrollView>

        </View>
    )
}

export default cart

const styles = StyleSheet.create({
    img: {
        width: 90,
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50

    },
    text: {
        width: 90,
        height: 90,
        marginTop: 70

    },
    price: {
        width: '30%',
        height: '100%',
        // borderWidth:1,
        alignItems: 'center',
        // justifyContent:'center'
    },
    view: {
        flexDirection: "row",
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '90%',
        height: 90,
        backgroundColor: 'white',
        elevation: 5,
        borderRadius: 10,
        margin: 10,

    },
    imag: {
        width: '90%',
        height: '90%',
        borderRadius: 50
    },
    txtPrice: {
        textAlign: 'center',
        borderRadius: 60,
        backgroundColor: 'blue',
        color: 'white',
        width: 35,
        height: 20

    },
    trash: {
        width: 30,
        height: 30
    },
    total: {
        width: "100%",
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        borderRadius: 20
    },
    number: {
        fontSize: 20,
        color:"white"
    },
    contener: {
        flex: 1,
    },
    qty:{
        textAlign: 'center',
        borderRadius: 60,
        backgroundColor: 'blue',
        color: 'white',
        width: 35,
        height: 20,

    }
})