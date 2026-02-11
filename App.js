import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from 'react-native';
import RootNavigator from './navigators/RootNavigators';
import WelcomeScreen from "./components/WelcomeScreen";

export default function App () {
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
