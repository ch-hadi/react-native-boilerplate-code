import React from 'react';
import { View, Text } from 'react-native';
import ProductCard from '../component/ProductCard'
function HomeScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <View style={{width:'50%', height:'70%'}}>
       <ProductCard />
       </View>
      </View>
    );
  }
 export default HomeScreen;