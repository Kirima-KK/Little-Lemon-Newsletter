import { Image, StyleSheet, View, Text, Pressable } from "react-native";

export default function WelcomeScreen ({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/img/little-lemon-logo.png')}
        accessible={true}
        accessibilityLabel="Little Lemon Logo"
        resizeMode="contain"
      />

      <Text style={styles.text}>Welcome to Little Lemon,{"\n"} where every dish is a taste of the Mediterranean sunshine.</Text>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Subscribe")}
      >
        <Text style={styles.buttonText}>Newsletter</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 140,
    paddingHorizontal: 24,
    backgroundColor: "#F4E8C2",
  },
  logo: {
    width: 360,
    height: 360,
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
  },
  buttonText: {
    color: "#EDEFEE",
    fontSize: 24,
    textAlign: "center",
    fontFamily: "Limelight-Regular",
  }
});