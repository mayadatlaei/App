import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity, ScrollView } from 'react-native'
import React, { useContext, useState } from 'react'
import { useLocalSearchParams, useNavigation} from 'expo-router'
import ProductContext from '@/store/ProductContext'

const productDescr = (props: any) => {
    const { cart, setCart } = useContext(ProductContext)

    const [number, setNumber] = useState(1)
    const route = useLocalSearchParams()

    const [small, setSmall] = useState(false)
    const [medium, setMedium] = useState(false)
    const [larg, setLarg] = useState(false)


    const [colorBlue, setColorBlue] = useState(false)
    const [colorBlack, setColorBlack] = useState(false)
    const [colorpink, setColorpink] = useState(false)

    const nav = useNavigation()

    const bluePress = () => {
        setColorBlue(true)
        setColorBlack(false)
        setColorpink(false)
    }
    const blackPress = () => {
        setColorBlue(false)
        setColorBlack(true)
        setColorpink(false)
    }
    const pinkPress = () => {
        setColorBlue(false)
        setColorBlack(false)
        setColorpink(true)
    }

    const smallPress = () => {
        setSmall(true)
        setMedium(false)
        setLarg(false)
    }
    const medumPress = () => {
        setSmall(false)
        setMedium(true)
        setLarg(false)
    }
    const largPress = () => {
        setSmall(false)
        setMedium(false)
        setLarg(true)
    }

    const addToCart = () => {
        const obj = {
           prodName: route.name,
           prodPrice: number * route.price,
           prodImg : route.img,
           qty: number
        }

        const mycart=cart 
        mycart.push(obj)
        setCart(mycart)
        nav.navigate('cart')
        
    }

    return (
        <View>
            <ScrollView>
                <Image style={styles.pic} source={route.img} />

                <View style={styles.info}>
                    <Text style={styles.text}>{route.name}</Text>
                    <View style={styles.obg}>
                        <Text style={styles.text} >{route.price + ' ' + '$'}</Text>
                        <Text style={styles.text} >{route.size}</Text>
                    </View>

                    <View style={styles.quntuty}>
                        <Pressable style={styles.ret} onPress={() => setNumber(number + 1)}>
                            <Text style={styles.plus}>+</Text>

                        </Pressable>
                        <Text style={styles.plus}>{number}</Text>
                        <Pressable style={styles.ret} onPress={() => {
                            if (number > 1) {
                                setNumber(number - 1)

                            }

                        }}>
                            <Text style={styles.plus}>-</Text>

                        </Pressable>
                    </View>
                    <Text style={styles.tor}>{number * route.price}</Text>

                </View>


                <View style={styles.sizeView}>
                    <Text style={styles.tex}>size</Text>
                    <TouchableOpacity onPress={smallPress} style={[styles.size, small ? styles.sizeSelected : styles.size]}>
                        <Text style={styles.tex} >S</Text>

                    </TouchableOpacity>
                    <TouchableOpacity onPress={medumPress} style={[styles.size, medium ? styles.sizeSelected : styles.size]}>
                        <Text style={styles.tex}>M</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={largPress} style={[styles.size, larg ? styles.sizeSelected : styles.size]}>
                        <Text style={styles.tex}>L</Text>
                    </TouchableOpacity>





                </View>

                <View style={styles.sizeView}>
                    <Text style={styles.tex}>color</Text>
                    <TouchableOpacity onPress={bluePress} style={[styles.blueCir, colorBlue ? styles.blueSelected : styles.blueCir]}>
                        <View style={styles.blue}></View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={blackPress} style={[styles.blackCir, colorBlack ? styles.blackSelected : styles.blackCir]}>
                        <View style={styles.black}></View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={pinkPress} style={[styles.pinkCir, colorpink ? styles.pinkSelected : styles.pinkCir]}>
                        <View style={styles.pink}></View>
                    </TouchableOpacity>


                </View>

                <TouchableOpacity style={styles.cart} onPress={addToCart}>
                    <Text >Add to Cart</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default productDescr

const styles = StyleSheet.create({
    pic: {
        width: "100%",
        height: 300,
        marginLeft: 'auto',
        resizeMode: 'cover',
        fontSize: 25,

    },
    text: {
        fontSize: 25,
        color: "black"



    },
    info: {
        // flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginVertical: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 5,
        width: "90%",
        alignSelf: 'center'
    },
    quntuty: {
        width: 200,
        height: 80,
        // borderWidth: 1,
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"

    },
    plus: {
        fontSize: 30
    },
    ret: {
        width: "30%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    obg: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-around",

        width: '90%'
    },
    tor: {
        fontSize: 22,
        color: "blue",

    },
    sizeView: {

        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 5,
        marginVertical: 10,
        fontSize: 20,
        width: '90%',
        alignSelf: 'center',
        padding: 10

    },
    size: {
        marginHorizontal: 10,
        fontSize: 27,
        borderWidth: 1,
        borderRadius: 40,
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",

    },
    sizeSelected: {
        marginHorizontal: 10,
        fontSize: 27,
        borderWidth: 3,
        borderColor: "red",
        borderRadius: 40,
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",

    },
    largSelected: {
        marginHorizontal: 10,
        fontSize: 27,
        borderWidth: 3,
        borderColor: "red",
        borderRadius: 40,
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",

    },
    blueCir: {
        marginHorizontal: 10,
        fontSize: 27,
        borderWidth: 1,
        borderRadius: 40,
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",

    },
    blue: {

        backgroundColor: 'blue',
        borderRadius: 40,
        width: '90%',
        height: '90%',
        alignItems: "center",
        justifyContent: "center",
    },
    blueSelected: {
        marginHorizontal: 10,
        fontSize: 27,
        borderWidth: 2,
        borderColor: 'red',
        borderRadius: 40,
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    },


    blackCir: {
        marginHorizontal: 10,
        fontSize: 27,
        borderWidth: 1,
        borderRadius: 40,
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    blackSelected: {
        marginHorizontal: 10,
        fontSize: 27,
        borderWidth: 2,
        borderColor: "red",
        borderRadius: 40,
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    },


    black: {

        backgroundColor: 'black',
        borderRadius: 40,
        width: '90%',
        height: '90%',
        alignItems: "center",
        justifyContent: "center",
    },
    pinkCir: {
        marginHorizontal: 10,
        fontSize: 27,
        borderWidth: 1,
        borderRadius: 40,
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",

    },
    pinkSelected: {
        marginHorizontal: 10,
        fontSize: 27,
        borderWidth: 2,
        borderColor: "red",
        borderRadius: 40,
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",

    },
    pink: {

        backgroundColor: 'pink',
        borderRadius: 40,
        width: '90%',
        height: '90%',
        alignItems: "center",
        justifyContent: "center",
    },

    tex: {
        fontSize: 20
    },
    etx: {
        fontSize: 15
    },
    cart: {
        width: '90%',
        height: 50,
        borderWidth: 1,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 50,
        borderRadius: 10
    }


})