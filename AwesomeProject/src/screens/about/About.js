import { View, Text,StyleSheet,Button } from 'react-native'
import React from 'react'

const About = ({navigation}) => {
  return (
    <View style={styles.root}>
      <Text style={styles.textStyle}>Welcome to About Us Page</Text>
      <Button
      title='Go Back to Home Page'
      onPress={()=>navigation.navigate('Home')}/>
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
export default About