import { View, Text, Pressable } from 'react-native'
import React from 'react'

const Cart = () => {
    const onCartPress=(navigation)=>{
        navigation.navigate('Home')
    }
  return (
    <View>
      <Pressable onPress={onCartPress}>
      <Text>cart</Text>
      </Pressable>
    </View>
  )
}

export default Cart