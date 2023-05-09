import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

import insertUserData from "../services/InsertUser";
import { Dimensions } from "react-native";
const Alto = Dimensions.get("window").width;
const Ancho = Dimensions.get("window").height;
import { colors, paleta } from "../components/Colores";
import Ionicons from "@expo/vector-icons/Ionicons";


export default function Account({ navigation }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  // const [isChecked, setChecked] = useState(false);

  const handlePress = async () => {
    try {
      const idUser = await insertUserData(name, email, password);
      if(idUser==undefined){
        console.log("Usuario no insertado")
      }else{
        console.log(`Usuario insertado con el ID: ${idUser}`)
        navigation.navigate("Login")
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Create an Account</Text>

      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <Ionicons name="person" size={32} color={paleta.variante1} />
        <TextInput
          style={styles.TextInput}
          placeholder="Name"
          placeholderTextColor={paleta.variante1}
          onChangeText={(name) => setName(name)}
        />
      </View>
      <View style={styles.inputView}>
        <Ionicons name="mail" size={32} color={paleta.variante1} />
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor={paleta.variante1}
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <Ionicons name="lock-closed" size={32} color={paleta.variante1} />
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor={paleta.variante1}
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={handlePress}>
        <Text style={styles.loginText}>Continue</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.googleBtn}>
        <Ionicons name="logo-google" size={32} color={paleta.variante1} />
        <Text style={styles.googleText}>LOGIN WITH GOOGLE </Text>
      </TouchableOpacity>
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
    fontSize: 40,
    marginTop: '20%',
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
    flexDirection: "row",
    borderBottomColor: paleta.variante1,
    borderBottomWidth: 2,

    width: "70%",
    height: 60,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    color: paleta.principal1,
    width: "0%",
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
    marginBottom: 40,
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
  },
});
