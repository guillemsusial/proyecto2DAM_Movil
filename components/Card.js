import * as React from "react";
import { Avatar, Button, Card } from "react-native-paper";
import { StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { paleta } from "./Colores";

const styles = StyleSheet.create({
  Icon: {
    backgroundColor: paleta.variante3,
  },
  Tarjeta: {
    margin: 10,
    flex: 1,
    backgroundColor: paleta.variante1,
  },
});

/**ICONO */
const LeftContent = (props) => (
  <Avatar.Icon style={styles.Icon} {...props} icon="car" />
);

export default function Cards({...props}) {
  const navigation = useNavigation();
  return (
    <Card
      style={styles.Tarjeta}
      onPress={() => navigation.navigate("Item", {
        itemId: props.key,
        name: props.name,
        url: props.url,
        ano_inicio: props.ano_inicio,
        ano_finalizacion: props.ano_finalizacion
      })}
      
    >
      <Card.Cover
        // #falta implementar las imagenes correspondientes
        source={{
          uri: props.url,
        }}
      />
      <Card.Title
        title={props.name}
        subtitle={props.ano_inicio+'-'+props.ano_finalizacion}
        left={LeftContent}
      />
    </Card>
  );
}
