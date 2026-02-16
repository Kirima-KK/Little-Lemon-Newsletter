import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function WelcomeScreen ({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          style={styles.logo}
          source={require('../assets/img/little-lemon-logo.png')}
          accessible={true}
          accessibilityLabel="Little Lemon Logo"
          resizeMode="contain"
        />

        <Text style={styles.text}>Welcome to Little Lemon,{"\n"} where every dish is a taste of the Mediterranean sunshine.</Text>

        <Pressable
          style={({ pressed }) => [
            pressed ? styles.buttonPressed : styles.button,
          ]}
          onPress={() => navigation.navigate("Subscribe")}
        >
          <Text style={styles.buttonText}>Newsletter</Text>
        </Pressable>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F4E8C2",
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 56,
    padding: 24,
    backgroundColor: "#FBF7E9",
    borderWidth: 4,
    borderStyle: "dashed",
    borderColor: "#485d57",
  },
  logo: {
    width: 320,
    height: 320,
  },
  text: {
    color: "#485d57",
    fontSize: 26,
    textAlign: "center",
    fontFamily: "Karla-Regular",
    lineHeight: 40,
  },
  button: {
    backgroundColor: "#637454",
    width: "80%",
    padding: 24,
    borderRadius: 12,
    boxShadow: "4px 8px 0 #485d57",
  },
  buttonPressed: {
    backgroundColor: "#485d57",
    width: "80%",
    padding: 24,
    borderRadius: 12,
    boxShadow: "4px 8px 0 #33423E inset",
  },
  buttonText: {
    color: "#EDEFEE",
    fontSize: 24,
    textAlign: "center",
    fontFamily: "Limelight-Regular",
  }
});