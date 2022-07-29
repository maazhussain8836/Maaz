import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home/Home';
import Contact from '../screens/contact/Contact';
import About from '../screens/about/About';

const Stack = createNativeStackNavigator();
const screenOptions={
    headerStyle: {
    backgroundColor: "#9AC4F8",
    },
    headerTintColor: "white",
    
}
function MainStackNavigation() {
  return (
    <Stack.Navigator  screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
}

const AboutStackNavigation=()=>{
    return (
        <Stack.Navigator  screenOptions={{headerShown:false}}>
          <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
      );
}



export {MainStackNavigation,AboutStackNavigation}