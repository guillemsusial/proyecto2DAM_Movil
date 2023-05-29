import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { paleta } from "../components/Colores";

const Profile = () => {
  const handleEditPress = () => {};
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          style={styles.coverPhoto}
          source={{
            uri: "https://blog.structuralia.com/hubfs/Conservacio%CC%81n%20carreteras%20ambiental.jpg",
          }}
        />
        <View style={styles.profileContainer}>
          <Image
            style={styles.profilePhoto}
            source={{
              uri: "https://img.freepik.com/foto-gratis/hombre-guapo-sentado-coche-probarlo_1303-21797.jpg",
            }}
          />
          <Text style={styles.nameText}>Manolo</Text>
        </View>
      </View>
      <View style={styles.bioContainer}>
        <Text style={styles.bioText}>
        Soy Manolo y mi pasión son los coches. Desde niño, me fascina su diseño y la emoción de conducir. Son mucho más que simples máquinas, son una forma de expresión y diversión sin igual. Siempre busco aprender y compartir mi amor por los coches con otros entusiastas.
        </Text>
      </View>
      <View style={styles.statsContainer}>
      
        <View style={styles.statContainer}>
          <Text style={styles.statCount}>7</Text>
          <Text style={styles.statLabel}>Marcas seguidas</Text>
        </View>
        <View style={styles.statContainer}>
          <Text style={styles.statCount}>3</Text>
          <Text style={styles.statLabel}>Coches guardados</Text>
        </View>
      </View>
      {/* <TouchableOpacity style={styles.button} onPress={handleEditPress}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity> */}
    </ScrollView>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: paleta.fondo,
  },
  headerContainer: {
    alignItems: "center",
  },
  coverPhoto: {
    width: "100%",
    height: 200,
  },
  profileContainer: {
    alignItems: "center",
    marginTop: -50,
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  nameText: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    color: paleta.text,
  },
  bioContainer: {
    padding: 15,
  },
  bioText: {
    fontSize: 16,
    color: paleta.text,
  },
  statsContainer: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 20,
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderColor: paleta.variante1,

  },
  statContainer: {
    alignItems: "center",
    flex: 1,
  },
  statCount: {
    fontSize: 20,
    fontWeight: "bold",
    color: paleta.variante1,
  },
  statLabel: {
    fontSize: 16,
    color: paleta.text,
  },
  button: {
    backgroundColor: paleta.variante1,
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 20,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
};

export default Profile;
