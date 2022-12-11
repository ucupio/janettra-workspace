/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useRef } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, Text, View } from 'react-native';
import {
  Avatar,
  Button,
  Card,
  createTheme,
  Icon,
  Image,
  ThemeMode,
  ThemeProvider,
  useTheme,
  useThemeMode,
} from '@rneui/themed';
import LinearGradient from 'react-native-svg/lib/typescript/elements/LinearGradient';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const theme = createTheme({
  lightColors: {
    primary: '#899656',
  },
  darkColors: {
    primary: '#344512',
  },
  mode: 'light',
});

const ColorScheme = ({ children }) => {
  const colorMode = useColorScheme();
  const { theme } = useTheme();
  const { setMode } = useThemeMode();

  React.useEffect(() => {
    setMode(colorMode as ThemeMode);
  }, [colorMode, setMode]);

  return (
    <View style={{ backgroundColor: theme.colors.background }}>{children}</View>
  );
};

export const App = () => {
  const scrollViewRef = useRef<null | ScrollView>(null);

  return (
    <AppearanceProvider>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <ColorScheme>
            <SafeAreaView>
              <ScrollView
                ref={(ref) => {
                  scrollViewRef.current = ref;
                }}
                contentInsetAdjustmentBehavior="automatic"
                style={styles.scrollView}
              >
                <Icon name="rowing" />
                <Button>Oke</Button>
                <Button
                  ViewComponent={LinearGradient} // Don't forget this!
                  linearGradientProps={{
                    colors: ['#FF9800', '#F44336'],
                    start: { x: 0, y: 0.5 },
                    end: { x: 1, y: 0.5 },
                  }}
                >
                  Linear Gradient
                </Button>
                <Card.Title>CARD WITH DIVIDER</Card.Title>
                <Card.Divider />
                <View style={{ position: 'relative', alignItems: 'center' }}>
                  <Image
                    style={{ width: '100%', height: 100 }}
                    resizeMode="contain"
                    source={{
                      uri: 'https://avatars0.githubusercontent.com/u/32242596?s=460&u=1ea285743fc4b083f95d6ee0be2e7bb8dcfc676e&v=4',
                    }}
                  />
                  <Text>Pranshu Chittora</Text>
                </View>
                <Text>Janettra</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginBottom: 40,
                  }}
                >
                  <Avatar
                    size={64}
                    rounded
                    icon={{ name: 'adb', type: 'material' }}
                    containerStyle={{ backgroundColor: 'orange' }}
                  >
                    <Avatar.Accessory size={24} />
                  </Avatar>
                  <Avatar
                    size={64}
                    rounded
                    source={{
                      uri: 'https://randomuser.me/api/portraits/women/57.jpg',
                    }}
                    title="Bj"
                    containerStyle={{ backgroundColor: 'grey' }}
                  >
                    <Avatar.Accessory size={23} />
                  </Avatar>
                </View>
              </ScrollView>
            </SafeAreaView>
          </ColorScheme>
        </ThemeProvider>
      </SafeAreaProvider>
    </AppearanceProvider>
  );
};
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ffffff',
  },
  codeBlock: {
    backgroundColor: 'rgba(55, 65, 81, 1)',
    marginVertical: 12,
    padding: 12,
    borderRadius: 4,
  },
  monospace: {
    color: '#ffffff',
    fontFamily: 'Courier New',
    marginVertical: 4,
  },
  comment: {
    color: '#cccccc',
  },
  marginBottomSm: {
    marginBottom: 6,
  },
  marginBottomMd: {
    marginBottom: 18,
  },
  marginBottomLg: {
    marginBottom: 24,
  },
  textLight: {
    fontWeight: '300',
  },
  textBold: {
    fontWeight: '500',
  },
  textCenter: {
    textAlign: 'center',
  },
  text2XS: {
    fontSize: 12,
  },
  textXS: {
    fontSize: 14,
  },
  textSm: {
    fontSize: 16,
  },
  textMd: {
    fontSize: 18,
  },
  textLg: {
    fontSize: 24,
  },
  textXL: {
    fontSize: 48,
  },
  textContainer: {
    marginVertical: 12,
  },
  textSubtle: {
    color: '#6b7280',
  },
  section: {
    marginVertical: 12,
    marginHorizontal: 12,
  },
  shadowBox: {
    backgroundColor: 'white',
    borderRadius: 24,
    shadowColor: 'black',
    shadowOpacity: 0.15,
    shadowOffset: {
      width: 1,
      height: 4,
    },
    shadowRadius: 12,
    padding: 24,
    marginBottom: 24,
  },
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  listItemTextContainer: {
    marginLeft: 12,
    flex: 1,
  },
  appTitleText: {
    paddingTop: 12,
    fontWeight: '500',
  },
  hero: {
    borderRadius: 12,
    backgroundColor: '#143055',
    padding: 36,
    marginBottom: 24,
  },
  heroTitle: {
    flex: 1,
    flexDirection: 'row',
  },
  heroTitleText: {
    color: '#ffffff',
    marginLeft: 12,
  },
  heroText: {
    color: '#ffffff',
    marginVertical: 12,
  },
  whatsNextButton: {
    backgroundColor: '#ffffff',
    paddingVertical: 16,
    borderRadius: 8,
    width: '50%',
    marginTop: 24,
  },
  learning: {
    marginVertical: 12,
  },
  love: {
    marginTop: 12,
    justifyContent: 'center',
  },
});

export default App;
