import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';

const BookPage = () => {
    const params = useLocalSearchParams();
    const data = JSON.parse(params?.data)
    console.log(data);

    const renderBooks = ({item, index}) => {
        // return data?.books?.map((book, index) => (

const book = item
          return ( <TouchableOpacity style={styles.book} key={index}>
                <Text style={styles.text}>{book?.name}</Text>
                <Image source={{ uri: book.image }} style={styles.bookImage} />
            </TouchableOpacity>)


        // ))
    }

    return (
        <View>
            {/* // <ScrollView style={styles.page}> */}
            <Text>BookPage</Text>
            {/* {renderBooks()} */}
            <FlatList
                data={data.books}
                // numColumns={2}
                renderItem={renderBooks}
                horizontal
            />
        </View>
    )
}

export default BookPage

const styles = StyleSheet.create({
    page: {
        flex: 1
    },
    book: {
        // width: "80%",
        alignSelf: 'center',
        marginVertical: 10,
        borderWidth: 2,
        borderRadius: 5,
        marginLeft:10
    },
    bookImage: {
        height: 250,
        width: 170,
        resizeMode: 'contain',
        backgroundColor: '#000',
        borderRadius: 2,
        
    },
    text: {
        textAlign: "center",
        fontSize: 20
    }
})