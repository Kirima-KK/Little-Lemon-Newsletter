import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../components/WelcomeScreen";
import SubscribeScreen from "../components/SubscribeScreen";
import { StyleSheet } from "react-native";

const Stack = createNativeStackNavigator();

export default function RootNavigator () {
  return (
    <>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerStyle: styles.header,
          headerTitleStyle: styles.headerText,
          headerTitleAlign: "center",
          headerBackIcon: () => (
            <Image
              source={require('../assets/my-custom-back-icon.png')}
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      >
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            headerShown: false,
          }} />

        <Stack.Screen
          name="Subscribe"
          component={SubscribeScreen}
          options={{
            title: "Newsletter",
          }}
        />
      </Stack.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#637454",
    boxShadow: "4px 8px 0 #485d57",
  },
  headerText: {
    fontFamily: "Limelight-Regular",
    textAlign: "center",
    color: "#F4E8C2",
  }
});