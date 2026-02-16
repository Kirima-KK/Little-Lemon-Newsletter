import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../components/WelcomeScreen";
import SubscribeScreen from "../components/SubscribeScreen";
import { Image, Pressable, StyleSheet } from "react-native";

const Stack = createNativeStackNavigator();

export default function RootNavigator () {
  return (
    <>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={({ navigation }) => ({
          headerStyle: styles.header,
          headerTitleStyle: styles.headerText,
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()}>
              <Image
                source={require("../assets/img/back-icon.png")}
                style={styles.backButton}
                resizeMode="contain"
              />
            </Pressable>
          ),
          headerTintColor: "#F4E8C2",
          headerTitleAlign: "center",
        })}
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
      </Stack.Navigator >
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
  },
  backButton: {
    tintColor: "#F4E8C2",
    width: 28,
    height: 28,
  }
});