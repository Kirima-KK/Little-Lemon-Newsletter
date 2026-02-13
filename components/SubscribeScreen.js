import { View, Text, StyleSheet, TextInput, Pressable, Image, Alert } from "react-native";
import { useState } from "react";

import { validateEmail } from "../utils/EmailValidation";

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
        onChangeText={setEmail}
        placeholder="Enter your email..."
      />

      <Pressable
        style={[
          styles.button,
          validateEmail(email) ? styles.button : styles.disableButton,
        ]}
        disabled={!validateEmail(email)}
        onPress={() => Alert.alert('Welcome to Little Lemon 🍋', 'Thanks for subscribing! \nWe can’t wait to share seasonal specials and exclusive recipes with you.', [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ])}
      >
        <Text style={styles.buttonText}>Subscribe</Text>
      </Pressable>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 24,
    padding: 32,
    backgroundColor: "#F4E8C2",
  },
  image: {
    width: 240,
    height: 240,
    marginBottom: 36,
  },
  title: {
    fontFamily: "Limelight-Regular",
    fontSize: 32,
    color: "#637454",
    textAlign: "center",
  },
  description: {
    fontSize: 24,
    color: "#637454",
    textAlign: "center",
    fontFamily:"Karla-Regular",
    lineHeight: 36,
  },
  input: {
    borderWidth: 1.5,
    borderColor: "#637454",
    borderRadius: 10,
    padding: 12,
    color: "#637454",
    fontSize: 18,
    marginVertical: 16,
    width: "100%",
  },
  button: {
    backgroundColor: "#637454",
    padding: 20,
    borderRadius: 10,
    width: "64%",
  },
  disableButton: {
    backgroundColor: "#CFCECC",
  },
  buttonText: {
    fontFamily: "Limelight-Regular",
    color: "#EDEFEE",
    fontSize: 24,
    textAlign: "center",
  }
});