import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import SigninScreen from './src/screens/signinScreen/SigninScreen'
import TabNavigation from './src/navigationContainer/TabNavigation'
import { NavigationContainer } from '@react-navigation/native';
const App = () => {
  return (
    
    
      <NavigationContainer>
      <TabNavigation styles={styles.root}/>
      
      
      </NavigationContainer>
    
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