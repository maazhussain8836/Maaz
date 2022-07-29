import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
// import Screens
import Home from '../screens/home/Home';
import Login from '../screens/login/Login';
import Cart from '../screens/cart/Cart';

const Stack = createNativeStackNavigator();

const StackNavigation=()=> {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation