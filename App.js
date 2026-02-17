import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

import RootNavigator from './navigators/RootNavigators';

SplashScreen.preventAutoHideAsync();

export default function App () {
  const [loaded, error] = useFonts({
    'Limelight-Regular': require('./assets/fonts/LimelightRegular.ttf'),
    'Karla-Regular': require('./assets/fonts/KarlaRegular.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
