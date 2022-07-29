import { View, Text,StyleSheet,Button } from 'react-native'
import React from 'react'

const Contact = ({navigation}) => {
  return (
    <View style={styles.root}>
      <Text style={styles.textStyle}>Welcome to Contact</Text>
      <Button
      title='Go to About Us page'
      onPress={()=>navigation.navigate('About')}/>
    </View>
  )
}

const styles=StyleSheet.create({
    root:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    textStyle:{
        fontSize:25,
        color:'#9AC4F8',
        fontWeight:'bold'
        
    }
})
export default Contact