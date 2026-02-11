import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../components/WelcomeScreen";
import SubscribeScreen from "../components/SubscribeScreen";

const Stack = createNativeStackNavigator();

export default function RootNavigator () {
  return (
    <>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Subscribe" component={SubscribeScreen} />
      </Stack.Navigator>
    </>
  );
}