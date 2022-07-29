import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './src/navigationContainer/DrawerNavigation';
// import TabNavigation from './src/navigationContainer/TabNavigation'
const App = () => {
  return (
    // <View style={styles.root}>
    //   <Text>App</Text>
    //   <About/>
    //   <Contact/>
    //   <Home/>
    // </View>
    <NavigationContainer>
      <DrawerNavigation/>
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