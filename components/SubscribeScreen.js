import { View, Text, StyleSheet, TextInput, Pressable, Image } from "react-native";
import { useState } from "react";

export default function SubscribeScreen () {
  const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/img/little-lemon-logo-grey.png')}
        style={styles.image}
        resizeMode="contain"
        accessible={true}
        accessibilityLabel="Little Lemon Logo"
      />
      <Text style={styles.title}>Stay in the Loop!</Text>
      <Text style={styles.description}>Subscribe to our newsletter and be the first to receive exclusive recipes, seasonal specials, and special offers from Little Lemon.</Text>

      <TextInput
        style={styles.input}
        value={email}
        onChangeText={() => setEmail()}
        placeholder="Enter your email..."
      />

      <Pressable
        style={styles.button}
        onPress={() => { }}
      >
        <Text style={styles.buttonText}>Subscribe</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 24,
    padding: 24,
  },
  image: {
    width: 240,
    height: 240,
    marginBottom: 36,
  },
  title: {
    fontFamily: "Limelight-Regular",
    fontSize: 32,
    color: "#485d57",
    textAlign: "center",
  },
  description: {
    fontSize: 20,
    color: "#485d57",
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#485d57",
    borderRadius: 10,
    padding: 12,
    color: "#485d57",
    fontSize: 18,
    marginVertical: 16,
    width: "100%",
  },
  button: {
    backgroundColor: "#485d57",
    padding: 20,
    borderRadius: 10,
    width: "64%",
  },
  buttonText: {
    fontFamily: "Limelight-Regular",
    color: "#EDEFEE",
    fontSize: 24,
    textAlign: "center",
  }
});