import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import StackNavigation from './src/navigation/StackNavigation'
import DrawerNavigation from './src/navigation/DrawerNavigation'

const App = () => {
  return (
    // <View style={styles.root} >
    //   <Text>Hello World</Text>
    //   <StackNavigation/>
    // </View>
    <>
    <DrawerNavigation/>
    <StackNavigation/>
    
    </>
  )
}
const styles=StyleSheet.create({
  root:{
    
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
})

export default App