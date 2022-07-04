import React from 'react';
import { useFonts, DMSans_400Regular } from '@expo-google-fonts/dm-sans';
import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';
import { Signin } from './src/screens/Signin';
import { StatusBar } from 'expo-status-bar';

export default function App() {

  const [fontsLoader] = useFonts({
    DMSans_400Regular,
    DMSerifDisplay_400Regular
  });

  if(!fontsLoader) return <AppLoading />

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style='light' translucent backgroundColor='transparent'/>
      <Signin/>
    </ThemeProvider>
  );
}
