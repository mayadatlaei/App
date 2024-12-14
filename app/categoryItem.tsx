import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import dataItem from '@/assets/data'
import CardItem from '@/components/CardItem'

const categoryItem = () => {

    const data = useLocalSearchParams()

    const filterData = () => {
        return dataItem.filter(item => {
            return item.category === data.catName
        })
    }

    const renderData = () => {
        const info = filterData()
        return info.map(item => {
            return( <CardItem
                name={item.name}
                price={item.price}
                img={item.img}

            />)
        })
    }


    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
            {renderData()}
            </ScrollView>
        </View>
    )
}

export default categoryItem

const styles = StyleSheet.create({})