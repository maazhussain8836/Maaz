import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const Recipies = () => {
  return (
    <View style={style.viewBackground}>
      <View style={{...style.imgView, height: '35%'}}>
        <Image
          source={require('../assets/images/physio.jpg')}
          style={style.imgHeader}
        />
      </View>
      <View style={{...style.imgView, position: 'relative'}}>
        <Text style={{...style.textStyle,fontSize:25}}>How Would You Like To Start ?</Text>
        {/* <FontAwesome5
          size={23}
          name={'check'}
          color={'#FFF'}
          style={{
            position: 'absolute',
            right: 1,
            backgroundColor: '#4176dc',
            borderColor: '#4176dc',
            padding: 3,
          }}
        /> */}
      </View>
      <View
        style={{
          marginTop:'5%',
          backgroundColor: '#889DC4',
          height: '10%',
          width: '90%',
          marginLeft: '5%',
          borderRadius: 15,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: '2%',
          paddingLeft:'6%'
        }}>
          <TouchableOpacity>
        <Text
          style={style.textStyle}>
          Beginner
        </Text>
        </TouchableOpacity>
        
      </View>
      <View
        style={{
          marginTop:'5%',
          backgroundColor: '#889DC4',
          height: '10%',
          width: '90%',
          marginLeft: '5%',
          borderRadius: 15,
          display: 'flex',
          paddingLeft:'6%',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: '2%',
        }}>
        <TouchableOpacity>
        <Text
          style={style.textStyle}>
          Average
        </Text>
        </TouchableOpacity>
        
      </View>
      <View
        style={{
          marginTop:'5%',
          backgroundColor: '#889DC4',
          height: '10%',
          width: '90%',
          marginLeft: '5%',
          paddingLeft:'6%',
          borderRadius: 15,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: '2%',
        }}>
          <TouchableOpacity>
        <Text
          style={style.textStyle}>
          Athelete
        </Text>
        </TouchableOpacity>
      </View>
    
    </View>
  );
};

export default Recipies;
const style = StyleSheet.create({
  viewBackground: {
    backgroundColor: '#A2B3D1',
    flex: 1,
  },
  imgView: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '5%',
  },
  imgHeader: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 20,
  },
  textStyle: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '600',
    textAlign:'center'
  },
});
