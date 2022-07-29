import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// imports screens...
import HomeScreen from '../../screens/homeScreen/HomeScreen';
import SigninScreen from '../../screens/signinScreen/SigninScreen';
import LoginScreen from '../../screens/loginScreen/LoginScreen';
import SignupScreen from '../../screens/signupScreen/SignupScreen';
import PostScreen from '../../screens/postScreen/PostScreen';

// import icons for tab navigation..
import Chat from '../../assets/chat.png'
import Home from '../../assets/home.png'
import Logout from '../../assets/logout.png'
import Post from '../../assets/post.png'
import Signup from '../../assets/signup.png'
const Tab = createBottomTabNavigator();

const TabNavigation=() =>{
  return (
    <NavigationContainer>
    <Tab.Navigator 
      screenOptions={{headerShown:false ,
       tabBarShowLabel: false, 
      tabBarStyle:[{position:'absolute',
      // bottom:5,
      
      left:0,
      right:10,
      elevation:0,
      borderRadius:15,
      height:90},
      [styles.shadow]],
      
      }} >
      <Tab.Screen name="Home"
       component={HomeScreen}
       options={{
        tabBarIcon:({focused})=>(
          <View style={{
            alignItems:'center',
            justifyContent:'center',
            top:'10'
          }}>
            
            <Home
              
              resizeMode='contain'
              style={{
                width:25,
                height:25,
                tintColor:focused? "#e32f45" :"#748c94",
              }}
              />
            <Text
              style={{color: focused ? "#e32f45" :"#748c94" ,fontSize:12}}>
            HOME
            </Text>
          </View>
        )
       }}

        //  options={
        //             {
        //                 tabBarIcon: ({ focused }) => (
        //                     <View style={[focused ? s.borrderd : null,s.viewr]}>
        //                         <LikeDislikeIcon height={moderateScale(30)} width={moderateScale(27)} fill={focused ? '#B48618' : '#fff'} />
        //                     </View>
        //                 )
        //             }
        //         } 
                 />
      <Tab.Screen name="Signin" component={SigninScreen} />
      <Tab.Screen name='+' component={PostScreen}/>
      <Tab.Screen name='Login' component={LoginScreen}/>
      <Tab.Screen name='Signup' component={SignupScreen}/>
    </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles=StyleSheet.create({
  shadow:{
    // shadowColor:'#7F5DF0',
    shadowColor:'#000000',
    shadowOffset:{
      width:0,
      height:80
    },
    shadowOpacity:1.25,
    shadowRadius:7.5,
    elevation:10
  }
})
export default TabNavigation

