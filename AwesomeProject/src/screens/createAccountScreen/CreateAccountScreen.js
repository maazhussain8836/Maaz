import React from 'react'
import { View, Text,Pressable } from 'react-native'

const CreateAccountScreen = ({navigation}) => {
  const onCreateAccountPress=()=>{
    navigation.navigate('LoginScreen')
    }

  return (
    <View>
    <Pressable onPress={onCreateAccountPress}>
  <Text>Create Account Screen</Text>
</Pressable>
</View>
  )
}

export default CreateAccountScreen