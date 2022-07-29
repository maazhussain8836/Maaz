import React from "react";
import {NavigationContainer} from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import 'react-native-reanimated'

// import Screens
import Home from "../screens/home/Home";
import Login from "../screens/login/Login";
import Cart from "../screens/cart/cart";

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Cart" component={Cart} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default DrawerNavigation