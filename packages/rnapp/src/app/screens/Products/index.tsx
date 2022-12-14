import { ScrollView, Text } from 'native-base';
import React from 'react';
import JCardProducts from '../../components/JCardProducts';

function ProductScreen() {
  return (
    <ScrollView>
      <Text>Explore Our Product</Text>
      <JCardProducts />
    </ScrollView>
  );
}

export default ProductScreen;
