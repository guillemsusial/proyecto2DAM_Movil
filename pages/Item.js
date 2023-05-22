import { View, Text, Button, ScrollView, FlatList } from "react-native";
import Boxes from "../components/Boxes";
import { StyleSheet } from "react-native";
import { paleta } from "../components/Colores";
import { Image } from "react-native";
import { useState, useEffect } from "react";
import fetchItemData from "../services/ItemApiCall"

//exp://172.17.40.175:19000

//Faltan las imagenes que pertenecen a cada coche(BBDD¿?)

export default function Item({ route, navigation }) {

  // Inicializamos los state como estados vacíos y segmentamos la especificaciones
  const [state, setState] = useState({});
  const [Didentidad, setDidentidad] = useState({});
  const [Emotor, setEmotor] = useState({});
  const [Dimensiones, setDimensiones] = useState({});
  const [Pesos, setPesos] = useState({});
  const [Etransmision, setEtransmision] = useState({});
  const [Velocidades, setVelocidades] = useState({});

  // Variables recibidas por parametro(generalmente desde home)
  const { name, ano_inicio, ano_finalizacion, brand } = route.params;

  // Utilizamos useEffect para realizar la petición axios al cargar la página
  useEffect(() => {

    //Llamada asíncrona a la API
    async function fetchData() {
      const data = await fetchItemData(name);

      // Actualizamos el estado con los nombres obtenidos de la base de datos
      setState(data);

      //los metemos en las variables de estado
      setDidentidad(data.datos_identificativos);
      setEmotor(data.especificaciones_del_motor);
      setDimensiones(data.dimensiones);
      setPesos(data.pesos);
      setEtransmision(data.especificaciones_de_la_transmision);
      setVelocidades(data.velocidades);
    }

    fetchData();
  }, []);

  //esta funcion se dedica a leer el objeto(JSON) y listar la key con el value en el componente
  function MapeoDios(item) {
    {
      /* Falta acabar de depurar el map que devuelve Mapeo de Arriba */
      /**Gracias al niko hay que depurar bastante mas de lo necesario */
      /*Y por eso estamos tan agradecidos del trabajo que ha hecho raul*/
    }

    //si el objeto contiente otros objetos dentro entrara aqui
    if (typeof item[1] === "object") {
      let result = Mapeo(item[1]);

      //si mapeo devuelve el segundo key null
      if (result[1] == null || result[1] == undefined) {
        return (
          <View contentContainerStyle={styles.scrollContent}>
            <View style={styles.two_column_scroll}>{result[0]}</View>
          </View>
        );
      } else {
        //si devuelve los 2
        return (
          <View contentContainerStyle={styles.scrollContent}>
            <View style={styles.two_column_scroll}>{result[0]}</View>
            <View style={styles.two_column_scroll}>{result[1]}</View>
          </View>
        );
      }
    } else {
      //si devuelve bien los datos
      return (
        <View style={styles.two_column_scroll}>
          <View style={{ width: "100%" }}>
            <Text style={{ color: paleta.text, fontSize: 19 }}>{item[0]}</Text>
            <View
              style={{
                borderBottomColor: 'white',
                borderBottomWidth: StyleSheet.hairlineWidth,
              }}
            />
            <Text style={{ color: paleta.fondoT, fontSize: 19 }}>
              {item[1]}
            </Text>
          </View>
        </View>
      );
    }
  }

  //aqui es donde llama cada vez que tiene un objeto dentro de otro.
  function Mapeo(Map) {
    /*falta quitar un monton de if's (gracias al niko), se puede hacer mucho
     mas limipio pero esta opcion es mucho mas rapida y necessitamos el tiempo
    */
    var s = new Array();
    /*De aqui ---------------------------------------------------------*/
    if (Map["potencia"]) {
      s.push([
        <View style={{ width: "100%" }}>
          <Text style={{ color: paleta.text, fontSize: 19 }}>potencia</Text>
          <View
            style={{
              borderBottomColor: 'white',
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />
          <Text style={{ color: paleta.fondoT, fontSize: 19 }}>
            {Map["potencia"]} {Map["unidad_de_potencia"]} / {Map["rpm"]} rpm
          </Text>
        </View>,
      ]);
    } else if (Map["par"]) {
      s.push([
        <View style={{ width: "100%" }}>
          <Text style={{ color: paleta.text, fontSize: 19 }}>par</Text>
          <View
            style={{
              borderBottomColor: 'white',
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />
          <Text style={{ color: paleta.fondoT, fontSize: 19 }}>
            {Map["par"]} {Map["unidad_de_par"]} / {Map["rpm"]} rpm
          </Text>
        </View>,
      ]);
    } else if (Map["unidad_del_combustible"]) {
      s.push([
        <View style={{ width: "100%" }}>
          <Text style={{ color: paleta.text, fontSize: 19 }}>combustible</Text>
          <View
            style={{
              borderBottomColor: 'white',
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />
          <Text style={{ color: paleta.fondoT, fontSize: 19 }}>
            {Map["capacidad_de_combustible"]} {Map["unidad_del_combustible"]}
          </Text>
        </View>,
      ]);
    } else if (Map["peso_en_vacio"]) {
      s.push([
        <View style={{ width: "100%" }}>
          <Text style={{ color: paleta.text, fontSize: 19 }}>pesos</Text>
          <View
            style={{
              borderBottomColor: 'white',
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />
          <Text style={{ color: paleta.fondoT, fontSize: 19 }}>
            {Map["peso_en_vacio"]} {Map["unidad_del_peso"]}
          </Text>
        </View>,
      ]);
    } else if (Map["velocidad_maxima"]) {
      s.push([
        <View style={{ width: "100%" }}>
          <Text style={{ color: paleta.text, fontSize: 19 }}>
            velocidad_maxima
          </Text>
          <View
            style={{
              borderBottomColor: 'white',
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />
          <Text style={{ color: paleta.fondoT, fontSize: 19 }}>
            {Map["velocidad_maxima"]} {Map["unidad_de_velocidad"]}
          </Text>
        </View>,
      ]);
    } else if (Map["unidad_de_aceleracion"]) {
      s.push([
        <View style={{ width: "100%" }}>
          <Text style={{ color: paleta.text, fontSize: 19 }}>0-100_km/h</Text>
          <View
            style={{
              borderBottomColor: 'white',
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />
          <Text style={{ color: paleta.fondoT, fontSize: 19 }}>
            {Map["0-100_km/h"]} {Map["unidad_de_aceleracion"]}
          </Text>
        </View>,
      ]);
    } else {
      /*hasta aqui ---------------------------------------------------- */
      try {
        for (var key in Map) {
          s.push([
            <View style={{ width: "100%" }}>
              <Text style={{ color: paleta.text, fontSize: 19 }}>{key}</Text>
              <View
                style={{
                  borderBottomColor: 'white',
                  borderBottomWidth: StyleSheet.hairlineWidth,
                }}
              />
              <Text style={{ color: paleta.fondoT, fontSize: 19 }}>
                {Map[key]}
              </Text>
            </View>,
          ]);
        }
      } catch (exception) {
        return exception;
      }
    }
    return s;
  }

  return (
    <Boxes size={1}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          <View style={styles.containerDos}>
            <Image
              source={{
                uri: "https://hips.hearstapps.com/hmg-prod/images/2023-mclaren-artura-101-1655218102.jpg?crop=1.00xw:0.847xh;0,0.153xh&resize=1200:*",
              }}
              style={styles.image}
            />
          </View>
          <Text style={styles.title}>{state.nombre}</Text>
          <View style={styles.meta}>
            <Text style={styles.author}>{Didentidad.pais_de_origen}</Text>
            <Text style={styles.date}>
              {ano_inicio}-{ano_finalizacion}
            </Text>
          </View>
          <Text style={styles.content}>Descripcion de ejemplo</Text>

          <Boxes size={1} bg={"#ffa108"} br={10} clr={"column"}>
            {/* ------------------DATOS IDENTIFICATIVOS-------------- */}

            <Text style={styles.miniTitle}>Datos identificativos</Text>
            {Object.entries(Didentidad).map((item) => {
              return MapeoDios(item);
            })}

            {/* ------------------ESPECIFICACIONES DEL MOTOR------------ */}

            <Text style={styles.miniTitle}>Especificaciones del motor</Text>
            {Object.entries(Emotor).map((item) => {
              return MapeoDios(item);
            })}

            {/* ------------------------DIMENSIONES-------------------------- */}

            <Text style={styles.miniTitle}>Dimensiones</Text>
            {Object.entries(Dimensiones).map((item) => {
              return MapeoDios(item);
            })}

            {/* ---------------------------PESO-------------------------- */}

            <Text style={styles.miniTitle}>Peso</Text>
            <View style={styles.two_column_scroll}>{Mapeo(Pesos)}</View>

            {/* ------------------------TRANSMISION-------------------------- */}
            <Text style={styles.miniTitle}>
              Especificaciones de la transmisión
            </Text>
            {Object.entries(Etransmision).map((item) => {
              return MapeoDios(item);
            })}
            {/* ------------------------VELOCIDADES-------------------------- */}
            <Text style={styles.miniTitle}>Velocidades</Text>
            {Object.entries(Velocidades).map((item) => {
              return MapeoDios(item);
            })}
          </Boxes>
        </View>
      </ScrollView>
    </Boxes>
  );
}

/*CSS*/
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  containerDos: {
    maxHeight: 300,
    backgroundColor: paleta.variante1,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 27,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 35,
    paddingLeft: 10,
    paddingBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: paleta.text,
    marginTop: 10,
  },
  meta: {
    flexDirection: "row",
    marginTop: 0,
  },
  author: {
    fontSize: 19,
    color: paleta.fondoT,
    marginRight: 10,
  },
  date: {
    fontSize: 19,
    color: paleta.fondoT,
  },
  image: {
    width: "auto",
    height: "100%",

    borderRadius: 15,
    overflow: "hidden",
  },
  content: {
    color: paleta.text,
    fontSize: 16,
    marginTop: 20,
    marginBottom: 20,
  },
  scrollContent: {
    padding: 10,
    flexDirection: "column",
  },
  two_column_scroll: {
    width: "90%",
    margin: 10,
    backgroundColor: paleta.fondo,
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
  },
  two_column_scrollD: {
    flex: 1,
    textAlign: "center",
    width: "90%",
    margin: 10,
    backgroundColor: paleta.fondo,
    padding: 10,
    borderRadius: 10,
    flexDirection: "column",
  },
  miniTitle: {
    fontSize: 24,
    fontWeight: "bold",
    borderBottomWidth: 2,
    borderBottomColor: paleta.fondo,
    marginTop: 10,
  },
});
