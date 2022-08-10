import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'

const Button = () => {
  return (
    <View style={style.buttonS}>
      <TouchableOpacity>
        <Text>hello</Text>
      </TouchableOpacity>
    </View>
  )
}

const style=StyleSheet.create({
    buttonS:{
        padding:10,
        backgroundColor:'blue',
        width:'25%',
        borderRadius:20,

    }
})
export default Button