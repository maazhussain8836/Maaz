import { View, Text, Pressable } from 'react-native'
import React from 'react'


const NewScreen = ({navigation}) => {
    const onPressedNewScreen=()=>{
        navigation.navigate('Home')
    }
  return (
    <View>
    <Text>Welcome to NewScreen</Text>
    <Pressable onPress={onPressedNewScreen}>
     <Text>Go to home</Text>
    </Pressable> 
    </View>
  )
}

export default NewScreen