import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from '@janettra-workspace/data-access';
import { NativeBaseProvider, extendTheme } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/Products';

const theme = extendTheme({
  fontConfig: {
    Kanit: {
      100: {
        normal: 'Kanit-Light',
        italic: 'Kanit-LightItalic',
      },
      200: {
        normal: 'Kanit-Light',
        italic: 'Kanit-LightItalic',
      },
      300: {
        normal: 'Kanit-Light',
        italic: 'Kanit-LightItalic',
      },
      400: {
        normal: 'Kanit-Regular',
        italic: 'Kanit-Italic',
      },
      500: {
        normal: 'Kanit-Medium',
      },
      600: {
        normal: 'Kanit-Medium',
        italic: 'Kanit-MediumItalic',
      },
      700: {
        normal: 'Kanit-Bold',
      },
      800: {
        normal: 'Kanit-Bold',
        italic: 'Kanit-BoldItalic',
      },
      900: {
        normal: 'Kanit-Bold',
        italic: 'Kanit-BoldItalic',
      },
    },
  },

  fonts: {
    heading: 'Kanit',
    body: 'Kanit',
    mono: 'Kanit',
  },
});

const Default = () => {
  return (
    <SafeAreaProvider>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Product" component={ProductScreen} />
      </Tab.Navigator>
    </SafeAreaProvider>
  );
};

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NativeBaseProvider theme={theme}>
          <Default />
        </NativeBaseProvider>
      </NavigationContainer>
    </Provider>
  );
}
