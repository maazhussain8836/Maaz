import { View, Text, Pressable } from 'react-native'
import React from 'react'

const ResetPassScreen = ({navigation}) => {
  const onResetPassScreenPressed=()=>{
    navigation.navigate('Signin')
  }
  return (
    <View>
      <Text>Your password has been reset</Text>
      <Pressable onPress={onResetPassScreenPressed}>
        <Text>Have a Account? Press to Sign In </Text>
      </Pressable>
    </View>
  )
}

export default ResetPassScreen