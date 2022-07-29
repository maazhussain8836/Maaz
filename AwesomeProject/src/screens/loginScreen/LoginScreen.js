import { View, Text, Pressable } from 'react-native'
import React from 'react'

const LoginScreen = ({navigation}) => {
  const onLoginScreenPressed=()=>{
    navigation.navigate('ResetPass')
  }
  return (
    <View>
    <Text>Welcome to Login Screen</Text>
    <Pressable onPress={onLoginScreenPressed}>
    <Text>Want to reset password</Text>
    </Pressable>
    </View>
  )
}

export default LoginScreen