import { View, Text, ScrollView } from "react-native";
import Boxes from "../components/Boxes";
import { useState, useEffect } from "react";

import Cards from "../components/Card";
import { StyleSheet } from "react-native";
import Search from "../components/Filtro";
import fetchHomeData from "../services/HomeApiCall"

export default function Home() {
  const [state, setState] = useState({ names: [] });
  // Hacemos la peticion a la API
  useEffect(() => {
    async function fetchData() {
      const formattedData = await fetchHomeData();
      setState(formattedData);
    }
    fetchData();
  }, []);
  return (
    <>
      <Search />
      {/* Creamos una box y le pasamos el prametro de tamaño */}
      <Boxes size={1}>
        {/* ScrollView para poder scrollear */}
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* Recorremos el array de objetos en 2 columnas utilizando el componente-> Cards */}
          {state.names.map((item) => (
            <View key={item.id} style={styles.two_column_scroll}>
              <Cards
                key={item.id}
                name={item.name}
                url={item.url}
                ano_inicio={item.ano_inicio}
                ano_finalizacion={item.ano_finalizacion}
              />
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
    width: "100%",
    flexDirection: "row",
  },
});
