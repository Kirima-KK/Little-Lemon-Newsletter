import { View, Text, StyleSheet, TextInput, Pressable, Image, Alert } from "react-native";
import { useState } from "react";

import { validateEmail } from "../utils/EmailValidation";

export default function SubscribeScreen () {
  const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
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
          style={({ pressed }) => [
            pressed ? styles.buttonPressed : validateEmail(email) ? styles.button : styles.disableButton,
          ]}
          disabled={!validateEmail(email)}
          onPress={() => Alert.alert('Welcome to Little Lemon 🍋', 'Thanks for subscribing! \nWe can’t wait to share seasonal specials and exclusive recipes with you.', [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ])}
        >
          <Text style={styles.buttonText}>Subscribe</Text>
        </Pressable>
      </View>
    </View >
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
    gap: 24,
    padding: 32,
    backgroundColor: "#FBF7E9",
    borderWidth: 4,
    borderStyle: "dashed",
    borderColor: "#485d57",
  },
  image: {
    width: 220,
    height: 220,
    marginBottom: 36,
  },
  title: {
    fontFamily: "Limelight-Regular",
    fontSize: 32,
    color: "#485d57",
    textAlign: "center",
  },
  description: {
    fontSize: 24,
    color: "#637454",
    textAlign: "center",
    fontFamily: "Karla-Regular",
    lineHeight: 36,
  },
  input: {
    padding: 16,
    fontSize: 16,
    fontFamily: "Karla-Regular",
    width: "100%",
    borderColor: "#485d57",
    borderWidth: 1.5,
    borderStyle: "solid",
    borderRadius: 10,
    boxShadow: "4px 8px 0 #485d57",
    backgroundColor: "#F4E8C2",
    transition: "ease 0.25s",
    color: "#485d57",
  },
  button: {
    backgroundColor: "#637454",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    // boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px , rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
    boxShadow: "4px 8px 0 #485d57",
  },
  buttonPressed: {
    backgroundColor: "#485d57",
    width: "80%",
    padding: 20,
    borderRadius: 10,
    // boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px inset, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px inset, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
    boxShadow: "4px 8px 0 #33423E inset",
  },
  disableButton: {
    padding: 20,
    borderRadius: 10,
    width: "80%",
    backgroundColor: "darkgray",
    // boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px inset, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px inset, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
    boxShadow: "4px 8px 0 gray inset",
  },
  buttonText: {
    fontFamily: "Limelight-Regular",
    color: "#EDEFEE",
    fontSize: 24,
    textAlign: "center",
  }
});