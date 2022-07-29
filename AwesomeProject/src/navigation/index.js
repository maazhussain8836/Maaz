import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CreateAccountScreen from '../screens/createAccountScreen/CreateAccountScreen';
import LoginScreen from '../screens/loginScreen/LoginScreen';
import ResetPassScreen from '../screens/resetPassScreen/ResetPassScreen';
import SigninScreen from '../screens/signinScreen/SigninScreen';
import SignupScreen from '../screens/signupScreen/SignupScreen'
import HomeScreen from '../screens/homeScreen/HomeScreen'
import NewScreen from '../screens/newScreen/NewScreen';


const Stack=createNativeStackNavigator()
const Navigation = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='CreateAccountScreen' component={CreateAccountScreen}/> 
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='LoginScreen' component={LoginScreen}/>
        <Stack.Screen name='ResetPass' component={ResetPassScreen}/>
        <Stack.Screen name='Signin' component={SigninScreen}/> 
        <Stack.Screen name='Signup' component={SignupScreen}/> 
        <Stack.Screen name='New' component={NewScreen}/> 
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default Navigation