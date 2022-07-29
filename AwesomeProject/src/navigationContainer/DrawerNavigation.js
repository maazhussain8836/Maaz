import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigation from "./TabNavigation";
import About from "../screens/about/About";
import Contact from "../screens/contact/Contact";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Drawer=createDrawerNavigator();

const DrawerNavigation=()=>{
    return(
        <Drawer.Navigator
        initialRouteName="Home"
        drawerPosition="left"
        activeColor="#e91e63"
        >
            <Drawer.Screen name="Home" component={TabNavigation}
            options={{
                drawerIcon: ({ color }) => (
                  <MaterialCommunityIcons name="home" color={color} size={20} />
                ),
              }} />
            <Drawer.Screen name="About" component={About}
            options={{
                drawerIcon: ({ color }) => (
                  <MaterialCommunityIcons name="bell" color={color} size={20} />
                ),
              }}/>
            <Drawer.Screen name="Contact" component={Contact}
            options={{
                drawerIcon: ({ color }) => (
                  <MaterialCommunityIcons name="contacts" color={color} size={20} />
                ),
              }}/>
        </Drawer.Navigator>
    )
}

export default DrawerNavigation