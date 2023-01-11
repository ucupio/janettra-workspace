import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'native-base';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './Home/HomeScreen';
import ProductScreen from './Products';

const Tab = createBottomTabNavigator();

function IndexScreen() {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaProvider>
        <Tab.Navigator
          initialRouteName={'Home'}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Product') {
                iconName = focused ? 'ios-list' : 'ios-list-outline';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Product" component={ProductScreen} />
        </Tab.Navigator>
      </SafeAreaProvider>
    </View>
  );
}

export default IndexScreen;
