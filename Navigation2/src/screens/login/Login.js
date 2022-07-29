


import { View, Text, Button,StyleSheet, Pressable } from 'react-native'
import React from 'react'

const Login = ({navigation}) => {
    const onLoginPress=()=>{
        navigation.navigate('Cart')
    }
  return (
    <View>
      <Text style={{
        fontSize:22, 
        fontWeight:'bold', 
        textAlign:'center',
        }}>
            Login</Text>
      <Text style={styles.textStyle }>Login Page</Text>
      <Pressable onPress={onLoginPress} >
        <Text style={styles.PressableStyle}>Go to Cart Page</Text>
      </Pressable>
    </View>
  )
}

const styles=StyleSheet.create({
    PressableStyle:{
            fontSize:20,
            fontWeight:'bold',
            textAlign:'center',
            padding:15,
            alignItems:'center',
            borderColor:'#e8e8e8',
            borderWidth:3,
            backgroundColor:'#B8D167',
            borderRadius:5,
            marginLeft:50,
            marginRight:50,
            marginTop:10
    },
    textStyle:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        marginTop:250
       
    }

})
export default Login