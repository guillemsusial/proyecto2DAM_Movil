import { View, Text, ScrollView } from "react-native";
import Boxes from "../components/Boxes";
import Header from "../components/Header";
import Cards from "../components/Card";
import { StyleSheet } from "react-native";

export default function Home() {
  /*#falta tiene que recibir los objetos de la base de datos */
  const state = {
    names: [
      { name: "Ben", id: 1 },
      { name: "Susan", id: 2 },
      { name: "Robert", id: 3 },
      { name: "Mary", id: 4 },
      { name: "Daniel", id: 5 },
      { name: "Laura", id: 6 },
      { name: "John", id: 7 },
      { name: "Debra", id: 8 },
      { name: "Aron", id: 9 },
      { name: "Ann", id: 10 },
      { name: "Steve", id: 11 },
      { name: "Olivia", id: 12 },
    ],
  }

  return (

    <>
      {/* Header */}
      <Header />
      {/* Creamos una box y le pasamos el prametro de tamaño */}
      <Boxes size={1}>
        {/* ScrollView para poder scrollear */}
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* Recorremos el array de objetos en 2 columnas utilizando el componente-> Cards */}
          {state.names.map((item, index) => (
            <View style={styles.two_column_scroll}>              
              <Cards key={index}>
                <Text>{item.name}</Text>
              </Cards>
            </View>
          ))}
        </ScrollView>
      </Boxes>
    </>
  );
}

/*CSS*/
const styles = StyleSheet.create({
  scrollContent: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  two_column_scroll: {
    width: "50%",
    flexDirection: "row",
  },
});
