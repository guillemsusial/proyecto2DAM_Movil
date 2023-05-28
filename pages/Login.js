import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import checkUser from "../services/LoginUser";
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

  const handlePress = async () => {
    try {
      if(await checkUser(email, password)){
        console.log("Inicio de sesión correcto")
        navigation.navigate("Home")
      }else{
        //FALTA: mensaje error
        console.log("Inicio de sesión incorrecto")
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Detail Wheels</Text>
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor={paleta.principal1}
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Contraseña"
          placeholderTextColor={paleta.principal1}
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.Text}>Contraseña olvidada? </Text>
        <TouchableOpacity>
          <Text style={styles.createAccountBtn}> Recuperar </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", marginBottom: 30 }}>
        <Text style={styles.Text}>Nuevo usuario? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Account")}>
          <Text style={styles.createAccountBtn}> Regístrate</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.googleBtn} onPress={() => navigation.navigate("Home")}>
        <Text style={styles.googleText}>Entrar como invitado </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={handlePress} //navigation.navigate("Home")
      >
        <Text style={styles.loginText}>INICIAR SESIÓN</Text>
      </TouchableOpacity>
      <View style={styles.checkboxContainer}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
        />
        <Text style={styles.paragraph}>Mantener mi sesión iniciada</Text>
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
    fontSize: 50,
    marginTop: "20%",
    color: paleta.principal1,
    fontWeight: "bold",
    marginBottom: 70,
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
    marginTop: 20,
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
    fontSize: 18,
    color: paleta.variante1,
  },
  createAccountBtn: {
    fontSize: 17,
    color: paleta.variante1,
    fontWeight: "bold",
    marginBottom: 20,
  },
  Text: {
    color: paleta.text,
    fontSize: 17,
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
