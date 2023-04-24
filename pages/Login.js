import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Checkbox from "expo-checkbox";
import { Dimensions } from "react-native";
const Alto = Dimensions.get("window").width;
const Ancho = Dimensions.get("window").height;
import { colors, paleta } from "../components/Colores";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setChecked] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Log In</Text>
      <View style={{ flexDirection: "row", marginTop: 50 }}>
        <Text style={styles.Text}>New user? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Account")}>
          <Text style={styles.createAccountBtn}> Create an account</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor={paleta.principal1}
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor={paleta.principal1}
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <View style={{ flexDirection: "row", marginBottom: 30 }}>
        <Text style={styles.Text}>Forgot Password? </Text>
        <TouchableOpacity>
          <Text style={styles.createAccountBtn}> Reset </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.googleBtn}>
        <Ionicons name="logo-google" size={32} color={paleta.variante1} />
        <Text style={styles.googleText}>LOGIN WITH GOOGLE </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <View style={styles.checkboxContainer}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
        />
        <Text style={styles.paragraph}>Keep me signed in</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: paleta.fondo,
    alignItems: "center",
    //justifyContent: 'center',
  },
  Title: {
    fontSize: 60,
    marginTop: "20%",
    color: paleta.principal1,
    fontWeight: "bold",
    marginBottom: 20,
  },
  image: {
    width: Alto * 0.5,
    height: Ancho * 0.3,
    resizeMode: "contain",
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: paleta.principal1T,
    borderRadius: 15,
    width: "70%",
    height: 60,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    color: paleta.principal1,
    width: "90%",
    height: 50,
    fontSize: 20,
    flex: 1,
    padding: 10,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 30,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: paleta.variante1,
  },
  loginText: {
    fontSize: 20,
    color: paleta.text,
  },
  googleBtn: {
    width: "80%",
    flexDirection: "row",
    color: paleta.variante1,
    borderColor: paleta.variante1,
    borderWidth: 2,
    borderRadius: 30,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  googleText: {
    width: "35%",
    textAlign: "center",

    fontSize: 15,
    color: paleta.variante1,
  },
  createAccountBtn: {
    fontSize: 20,
    color: paleta.variante1,
    fontWeight: "bold",
    marginBottom: 20,
  },
  Text: {
    color: paleta.text,
    fontSize: 20,
    flexDirection: "row",
  },
  checkboxContainer: {
    flexDirection: "row",
    margin: 20,
  },
  checkbox: {
    marginRight: 10,
    alignSelf: "center",
    borderColor: paleta.variante1,
  },
  paragraph: {
    fontSize: 15,
    color: paleta.variante1,
  },
});
