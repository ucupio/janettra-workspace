import { ScrollView, Text } from 'native-base';
import React from 'react';
import JCardProducts from '../../components/JCardProducts';

export default function HomeScreen() {
  return (
    <ScrollView horizontal>
      <Text style={{ fontSize: 20, textAlign: 'center' }} my={'4'}>
        Promo on fire, Get It Now!
      </Text>
      <JCardProducts />
    </ScrollView>
  );
}
