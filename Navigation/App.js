import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import StackNavigation from './src/navigation/StackNavigation'

const App = () => {
  return (
    <View style={styles.root} >
      <Text>Hello World</Text>
      <StackNavigation/>
    </View>
  )
}
const styles=StyleSheet.create({
  root:{
    display:'flex',
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
})

export default App