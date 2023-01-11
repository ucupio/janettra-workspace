import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from '@janettra-workspace/data-access';
import { NativeBaseProvider, extendTheme } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StoreObject } from '@janettra-workspace/shared-types';
import LoginScreen from './screens/Auth/LoginScreen';
import IndexScreen from './screens';

const Stack = createNativeStackNavigator();

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
  const auth = useSelector((state: StoreObject) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'GET_AUTH' });
  }, [dispatch]);

  console.log(auth);

  const tempAuth = true;

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={tempAuth ? 'Root' : 'Login'}>
          <Stack.Screen
            name="Root"
            component={IndexScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
        <Default />
      </NativeBaseProvider>
    </Provider>
  );
}
