import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../components/WelcomeScreen";

const Stack = createNativeStackNavigator();

export default function RootNavigator () {
  return (
    <>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
      </Stack.Navigator>
    </>
  );
}