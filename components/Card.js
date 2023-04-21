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
        ano_inicio: props.ano_inicio,
        ano_finalizacion: props.ano_finalizacion
      })}
      
    >
      <Card.Cover
        // #falta implementar las imagenes correspondientes
        source={{
          uri: "https://hips.hearstapps.com/hmg-prod/images/2023-mclaren-artura-101-1655218102.jpg?crop=1.00xw:0.847xh;0,0.153xh&resize=1200:*",
        }}
      />
      <Card.Title
        title={props.name}
        subtitle="Card Subtitle"
        left={LeftContent}
      />
    </Card>
  );
}
