import axios from "axios";
import bcrypt from 'react-native-bcrypt';

const secret = 'j4hxTuaF2IokPNQYhBoo7OBeVEk8WTEI7JeMrByQQ6LLnAPglV7AOLe3CSNZ52yq';

// Función para verificar si un usuario existe en la tabla de usuarios
export default async function checkUser(username, password) {
  try {

    // Validación y sanitización de los datos de entrada
    if (!username || !password) {
      throw new Error('Faltan datos de usuario');
    }

    // Si se encuentra un usuario, devolver el hash del usuario
    const data = {
      dataSource: "Proyecto2DAM",
      database: "CarWikiAR",
      collection: "users",
      filter: {
        email: username
      },
      projection:{
          password: 1
      }
    };

    const response = await axios.post(
      "https://eu-central-1.aws.data.mongodb-api.com/app/data-gnxiz/endpoint/data/v1/action/find",
      data,
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Request-Headers": "*",
          "api-key": secret,
          Accept: "application/json"
        }
      }
    );

    if (response.data.documents.length > 0) {
      //console.log(response.data.documents[0].password);
      const hash = response.data.documents[0].password;

      const result = bcrypt.compareSync(password, hash);

      return result;
    } else {
      throw new Error('El nombre de usuario o la contraseña son incorrectos');
    }
  } catch (error) {
    console.error(error);
  }
}

// Función para comparar una contraseña con un hash
function comparePassword(password, hash) {
  const result = bcrypt.compareSync(password, hash); // Compara la contraseña con el hash
  return result;
}