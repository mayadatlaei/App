import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { Stack } from 'expo-router';
import ProductProvider from '@/store/ProductProvider';


const _layout = () => {
  return (
    <ProductProvider>
    <Stack>
      <Stack.Screen name='login' />
      <Stack.Screen name='ProductDescr' />
       <Stack.Screen name='categoryItem'/>
       
       <Stack.Screen name='cart'/>
    </Stack>
    </ProductProvider>
  )
}

export default _layout

const styles = StyleSheet.create({})