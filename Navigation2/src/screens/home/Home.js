import { View, Text, Button,StyleSheet, Pressable } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
    const onHomePress=()=>{
        navigation.navigate('Login')
    }
  return (
    <View>
      <Text style={{
        fontSize:22, 
        fontWeight:'bold', 
        textAlign:'center',
        }}>
            Home</Text>
      <Text style={styles.textStyle }>Home Page</Text>
      <Pressable onPress={onHomePress} >
        <Text style={styles.PressableStyle}>Move to Next Page Login</Text>
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
            backgroundColor:'#ADE6D1',
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
export default Home