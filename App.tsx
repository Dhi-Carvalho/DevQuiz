import React from 'react';
import {
  useFonts,
  NotoSansHK_100Thin,
  NotoSansHK_300Light,
  NotoSansHK_400Regular,
  NotoSansHK_500Medium,
  NotoSansHK_700Bold,
  NotoSansHK_900Black

} from '@expo-google-fonts/noto-sans-hk';
import AppLoading from 'expo-app-loading';

import { Welcome } from './src/pages/Welcome';

export default function App(){
  const [ fontsLoaded ] = useFonts({
    NotoSansHK_100Thin,
    NotoSansHK_300Light,
    NotoSansHK_400Regular,
    NotoSansHK_500Medium,
    NotoSansHK_700Bold,
    NotoSansHK_900Black
  });

  if(!fontsLoaded)
    return <AppLoading/>

  return(
    <Welcome/>
  )
}
