import { View, Text, Pressable, Button } from 'react-native'
import React from 'react'



function Cart({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Cart Screen</Text>
        <Button
          title="Go to Home... again"
          onPress={() => navigation.push('Home')}
        //   we can also use push as navigate..
        />
      </View>
    );
  }

  export default Cart