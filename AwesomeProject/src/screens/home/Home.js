import { View, Text,Button,StyleSheet } from 'react-native'
import React from 'react'


const Home=({navigation})=> {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.textStyle}>Home Screen</Text>
        <Button 
          title="Go to Contact Page"
          onPress={() => navigation.navigate('Contact')}
        />
      </View>
    );
  }
  const styles=StyleSheet.create({
    textStyle:{
        fontSize:25,
        color:'#9AC4F8',
        fontWeight:'bold',
        marginBottom:10
    }
  })
export default Home