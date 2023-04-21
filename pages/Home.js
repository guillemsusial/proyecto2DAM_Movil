import { View, Text, ScrollView } from "react-native";
import Boxes from "../components/Boxes";
import { useState, useEffect } from "react";

import Cards from "../components/Card";
import { StyleSheet } from "react-native";
import Search from "../components/Filtro";

import axios from 'axios';

export default function Home() {

  const [state, setState] = useState({names: []}); // Inicializamos state como un estado vacío

  const data = {
    dataSource: "Proyecto2DAM",
    database: "CarWikiAR",
    collection: "cars",
    projection: {
      id: 1,
      nombre: 1,
      "datos_identificativos.fabricante": 1,
      "datos_identificativos.años_de_fabricacion.año_de_inicio": 1,
      "datos_identificativos.años_de_fabricacion.año_de_finalizacion": 1
    }//años_de_fabricacion: { año_de_inicio: 1983, año_de_finalizacion: 1987 },
  };

  useEffect(() => { // Utilizamos useEffect para realizar la petición axios al cargar la página
    axios.post('https://eu-central-1.aws.data.mongodb-api.com/app/data-gnxiz/endpoint/data/v1/action/find', data, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': 'j4hxTuaF2IokPNQYhBoo7OBeVEk8WTEI7JeMrByQQ6LLnAPglV7AOLe3CSNZ52yq',
        'Accept': 'application/json'
      }
    })
    .then(response => {
      var data = response.data;

      //console.log(response.data);

      let formattedData = {
        names: data.documents.map(({ _id, nombre, datos_identificativos }) => ({ 
            id: _id,
            name: nombre,
            brand: datos_identificativos.fabricante,
            ano_inicio: datos_identificativos.años_de_fabricacion.año_de_inicio,
            ano_finalizacion: datos_identificativos.años_de_fabricacion.año_de_finalizacion,
        }))
    };
      console.log(formattedData);
      setState(formattedData); // Actualizamos el estado con los nombres obtenidos de la base de datos
    })
    .catch(error => {
      console.error(error);
    });
  }, []); // Añadimos un array vacío como segundo parámetro para que useEffect solo se ejecute una vez al cargar la página

  return (
    <>  
     <Search/>
      {/* Creamos una box y le pasamos el prametro de tamaño */}
      <Boxes size={1}>
        {/* ScrollView para poder scrollear */}
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* Recorremos el array de objetos en 2 columnas utilizando el componente-> Cards */}
          {state.names.map((item, index) => (
            <View key={index} style={styles.two_column_scroll}>              
              <Cards key={index} name={item.name} ano_inicio={item.ano_inicio} ano_finalizacion={item.ano_finalizacion}/> 
               
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
