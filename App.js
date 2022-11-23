import { useEffect, useCallback } from 'react';
import { useFonts } from 'expo-font';
import { Fonts } from './src/utils/assets'
import { NavigationContainer } from '@react-navigation/native'
import * as SplashScreen from 'expo-splash-screen';
import AuthStack from './src/screens/AuthStack';


export default function App() {

  console.disableYellowBox = true;
  const [fontsLoaded] = useFonts(Fonts);

  const prepare = async () => {

    try {
      await SplashScreen.preventAutoHideAsync();
    } catch (e) {
      console.log(`${e}`);
    }
  }

  useEffect(() => {
    prepare();
  }, []);

  const onLayout = useCallback(async () => {
    if (fontsLoaded) await SplashScreen.hideAsync();
  }, [fontsLoaded]);

  return (
    !fontsLoaded ? null :
      <NavigationContainer onReady={onLayout}>
        <AuthStack />
      </NavigationContainer>
  );
}
