import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';

import RootNavigator from './navigators/RootNavigators';
import WelcomeScreen from "./components/WelcomeScreen";

SplashScreen.preventAutoHideAsync();

export default function App () {
   const [loaded, error] = useFonts({
    'Limelight-Regular': require('./assets/fonts/LimelightRegular.ttf'),
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
    // <View style={styles.container}>
    //   <WelcomeScreen />
    // </View>
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
