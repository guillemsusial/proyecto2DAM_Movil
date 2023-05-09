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
              uri: "https://www.pngarts.com/files/11/Avatar-PNG-Free-Download.png",
            }}
          />
          <Text style={styles.nameText}>Your Name</Text>
        </View>
      </View>
      <View style={styles.bioContainer}>
        <Text style={styles.bioText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
          ullamcorper nisi.
        </Text>
      </View>
      <View style={styles.statsContainer}>
      
        <View style={styles.statContainer}>
          <Text style={styles.statCount}>5678</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.statContainer}>
          <Text style={styles.statCount}>9101</Text>
          <Text style={styles.statLabel}>Following</Text>
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
