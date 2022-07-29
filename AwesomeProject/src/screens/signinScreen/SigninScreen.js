import { View, Text,Pressable } from 'react-native'
import React from 'react'


const SigninScreen = ({navigation}) => {
  const onSigninScreenPressed=()=>{
    navigation.navigate('New')
  }
  
  
  return (

      <View>
      <Text> Welcome to SignIn Screen </Text>
      <Pressable onPress={onSigninScreenPressed} >
      <Text>Move to new Screen</Text>
      </Pressable>
      </View>
    
  )
}

export default SigninScreen