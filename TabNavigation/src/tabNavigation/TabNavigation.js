import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'
import IonIcon from 'react-native-vector-icons/Ionicons'

// import Screens
import SignupScreen from '../signupScreen/SignupScreen';
import SigninScreen from '../signinScreen/SigninScreen';
import HomeScreen from '../screens/homeScreen/HomeScreen';
const Tab = createBottomTabNavigator();

const  TabNavigation=()=> {
  return (
    <NavigationContainer>
    <Tab.Navigator 
    
    screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }
             else if (route.name === 'Signin') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }
            else if (route.name === 'Signup') {
              iconName = focused ? 'arrow-down' : 'arrow-down-circle';
            }

            // You can return any component that you like here!
            return <IonIcon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })} 
        
        >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Signin" component={SigninScreen} />
      <Tab.Screen name="Signup" component={SignupScreen} />
    </Tab.Navigator>
    </NavigationContainer>
    
  );
}

export default TabNavigation