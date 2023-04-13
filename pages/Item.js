import { View, Text, Button, ScrollView, FlatList } from "react-native";
import Boxes from "../components/Boxes";
import { StyleSheet } from "react-native";

import { Image } from "react-native";

//exp://172.17.40.175:19000

const test = {
  nombre: "Toyota Corolla Coupe GT",
  datos_identificativos: {
    pais_de_origen: "Japón",
    fabricante: "Toyota",
    modelo: "Corolla",
    generacion: "5ta generación",
    serie: "E80",
    años_de_fabricacion: { año_de_inicio: 1983, año_de_finalizacion: 1987 },
    clase: "Compacto",
    tipo_de_cuerpo: "Coupé",
    numero_de_puertas: 2,
    traccion: "RWD (tracción trasera)",
  },
  especificaciones_del_motor: {
    fabricante_del_motor: "Toyota",
    nombre_del_motor: "4A-GE",
    tipo_de_motor: "Motor de combustión de 4 tiempos",
    disposicion_de_los_cilindros: "4 cilindros en linea",
    tipo_de_combustible: "Gasolina",
    sistema_de_inyeccion: "Inyección indirecta",
    tipo_de_aspiracion: "Atmosférico",
    valvulas_por_cilindro: 4,
    valvulas_totales: 16,
    potencia: { unidad_de_potencia: "hp", potencia: 122, rpm: 6600 },
    par: { unidad_de_par: "Nm", par: 142, rpm: 5000 },
    "relacion_peso/potencia": "13.6 kg/hp",
  },
  dimensiones: {
    unidad_de_distancia: "mm",
    longitud: 4180,
    anchura: 1625,
    altura: 1335,
    separacion_de_las_ruedas: 2400,
    combustible: { unidad_del_combustible: "l", capacidad_de_combustible: 50 },
  },
  pesos: { unidad_del_peso: "kg", peso_en_vacio: 995 },
  especificaciones_de_la_transmision: {
    tipo_de_transmision: "Manual",
    numero_de_marchas: 5,
  },
  velocidades: { "velocidad-maxima": 196, "0-100_km/h": 8.9 },
};

const post = {
  id: 1,
  title: "Blog post title",
  image:
    "https://hips.hearstapps.com/hmg-prod/images/2023-mclaren-artura-101-1655218102.jpg?crop=1.00xw:0.847xh;0,0.153xh&resize=1200:*",
  author: "Jane Doe",
  date: "January 1, 2020",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.",
};

export default function Item() {
  const Didentidad = Object.entries(test.datos_identificativos);
  const Emotor = Object.entries(test.especificaciones_del_motor);
  const Dimensiones = Object.entries(test.dimensiones);
  function MapeoDios(item) {
      {/* Falta acabar de depurar el map que devuelve Mapeo de Arriba */}
    if (typeof item[1] === "object") {
      let result = Mapeo(item[1]);
      return (
        <View contentContainerStyle={styles.scrollContent}>
        
          <View style={styles.two_column_scroll}>{result[0]}</View>
          <View style={styles.two_column_scroll}>{result[1]}</View>
        </View>
      );
    } else {
      return (
        <View style={styles.two_column_scroll}>
          <View style={{ width: "60%" }}>
            <Text style={{ color: "white", fontSize: 19 }}>{item[0]}</Text>
          </View>
          <View style={{ width: "30%" }}>
            <Text style={{ color: "#999", fontSize: 19 }}>{item[1]}</Text>
          </View>
        </View>
      );
    }
  }
  function Mapeo(Map) {
    var s = new Array();
    try {
      for (var key in Map) {
        s.push([
          <View style={{ width: "60%" }}>
            <Text style={{ color: "white", fontSize: 19 }}>{key}</Text>
          </View>,
          <View style={{ width: "30%" }}>
            <Text style={{ color: "#999", fontSize: 19 }}>{Map[key]}</Text>
          </View>,
        ]);
      }
      return s;
    } catch (exception) {
      return exception;
    }
  }

  return (
    <Boxes size={1}>
      {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> */}
      <View style={styles.container}>
        <View style={styles.containerDos}>
          <Image
            source={{
              uri: "https://hips.hearstapps.com/hmg-prod/images/2023-mclaren-artura-101-1655218102.jpg?crop=1.00xw:0.847xh;0,0.153xh&resize=1200:*",
            }}
            style={styles.image}
          />
        </View>
        <Text style={styles.title}>{test.nombre}</Text>
        <View style={styles.meta}>
          <Text style={styles.author}>
            {test.datos_identificativos.pais_de_origen}
          </Text>
          <Text style={styles.date}>
            {test.datos_identificativos.años_de_fabricacion.año_de_inicio}-
            {test.datos_identificativos.años_de_fabricacion.año_de_finalizacion}
          </Text>
        </View>
        <Text style={styles.content}>{post.content}</Text>

        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Boxes size={1} bg={"#ffa108"} br={10} clr={"column"}>
            <Text style={styles.miniTitle}>Velocidades</Text>

            {Didentidad.map((item) => {
              return MapeoDios(item);
            })}

            <Text style={styles.miniTitle}>
              Especificaciones del Motor
            </Text>
            {Emotor.map((item) => {
              return MapeoDios(item);
            })}
            <Text style={styles.miniTitle}>
              Dimensiones
            </Text>
            {Dimensiones.map((item) => {
              return MapeoDios(item);
            })}
          </Boxes>
        </ScrollView>
      </View>
    </Boxes>
  );
}

/*CSS*/
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 20,
  },
  containerDos: {
    backgroundColor: "orange",
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
    color: "white",
    marginTop: 10,
  },
  meta: {
    flexDirection: "row",
    marginTop: 20,
  },
  author: {
    fontSize: 19,
    color: "#999",
    marginRight: 10,
  },
  date: {
    fontSize: 19,
    color: "#999",
  },
  image: {
    width: "auto",
    height: 300,
    //Below lines will help to set the border radius
    borderRadius: 15,
    overflow: "hidden",
  },
  content: {
    color: "white",
    fontSize: 16,
    marginTop: 20,
  },
  scrollContent: {
    padding: 10,
    flexDirection: "column",
  },
  two_column_scroll: {
    width: "90%",
    margin: 10,
    backgroundColor: "#151515",
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
  },
  two_column_scrollD: {
    flex: 1,
    textAlign: "center",
    width: "90%",
    margin: 10,
    backgroundColor: "#151515",
    padding: 10,
    borderRadius: 10,
    flexDirection: "column",
  },
  miniTitle: {
    fontSize: 24,
    fontWeight: "bold",
    borderBottomWidth: 2,
    borderBottomColor: "black",
    marginTop: 10,
  },
});

{
  /* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View> */
}
