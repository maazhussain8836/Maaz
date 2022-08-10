import { View, Text ,StyleSheet,Image, Pressable, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { FlatGrid } from 'react-native-super-grid';
import { dietImages } from '../components/DietImages';

const Diet = () => {
    const [items, setItems] = useState(dietImages)
  return (<>
  
      <View style={{backgroundColor:'#7089B8',flex:1}} >
        <Text style={{fontWeight:'600', alignItems:'center',textAlign:'center',fontSize:20,top:30 ,color:'#FFF'}}>CHOOSE YOUR MUSCLE FOR THERAPY</Text>
    <FlatGrid
      itemDimension={150}
      data={items}
      style={styles.gridView}
      // staticDimension={300}
      // fixed
      spacing={20}
      renderItem={({ item }) => (
        <>
        
        <View style={[styles.itemContainer]}>
        <TouchableOpacity >
          <Image style={{width:120,height:100,resizeMode:'contain',borderRadius:50}}
           source={item.img} />
          
          <Text style={styles.itemName}>{item.name}</Text>
          </TouchableOpacity>
        </View>
        
        </>
        
      )}
    />
    </View>
    </>
  )
}

const styles = StyleSheet.create({
    gridView: {
      marginTop: '10%',
      flex: 1,
      borderWidth:1,
      borderTopLeftRadius:20,
      borderTopRightRadius:20,
      borderColor:'#7089B8',
      backgroundColor:'#7089B8',
      shadowColor: '#2961ce',
      shadowOpacity: 0.86,
      shadowOffset: { width: 15, height: 12},
      shadowRadius: 0,
      elevation: 8,
      // position:'absolute',
      // zIndex:1
      
    },
    itemContainer: {
      alignItems:'center',
      // justifyContent: 'flex-end',
      borderRadius: 18,
      padding: 40,
      height: 200,
      width:'100%',
    
      backgroundColor:'#97AACB'
      
    },
    itemName: {
      marginTop:'10%',
      fontSize: 15,
      color: '##B8B8B8',
      textAlign:'center',
      fontWeight: '600',
    },

  });
export default Diet