import { StoreObject } from '@janettra-workspace/shared-types';
import { ScrollView, Text, View } from 'native-base';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import JCardProducts from '../components/JCardProducts';

function HomeScreen() {
  const products = useSelector((state: StoreObject) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'GET_PRODUCTS' });
  }, [dispatch]);

  console.log('---->', products);
  return (
    <View>
      <Text style={{ fontSize: 20, textAlign: 'center' }} my={'4'}>
        Promo on fire, Get It Now!
      </Text>
      <ScrollView horizontal>
        {products.map((product) => (
          <JCardProducts data={product} key={product.id} />
        ))}
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
