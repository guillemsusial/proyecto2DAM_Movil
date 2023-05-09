import axios from "axios";
import bcrypt from 'react-native-bcrypt';

const secret = 'j4hxTuaF2IokPNQYhBoo7OBeVEk8WTEI7JeMrByQQ6LLnAPglV7AOLe3CSNZ52yq';

export default async function insertUserData(username, email, password) {
  try {
    // Encriptación de la contraseña con bcrypt

    function encryptPassword(password) {
      const saltRounds = 5; // Número de veces que se aplica la función de hash (recomendado: 10 o más)
      const salt = bcrypt.genSaltSync(saltRounds); // Genera una cadena aleatoria para mezclar con la contraseña
      const hash = bcrypt.hashSync(password, salt); // Genera el hash de la contraseña
      return hash;
    }

    const encryptedPassword = encryptPassword(password);

    // Validación y sanitización de los datos de entrada
    if (!username || !password || !email) {
      throw new Error('Faltan datos de usuario');
    }
    if (username.length < 3 || username.length > 20) {
      throw new Error('El nombre de usuario debe tener entre 3 y 20 caracteres');
    }
    if (password.length < 3 || password.length > 20) {
      throw new Error('La contraseña debe tener entre 3 y 20 caracteres');
    }
    if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      throw new Error('El correo electrónico no es válido');
    }

    const data = {
      dataSource: "Proyecto2DAM",
      database: "CarWikiAR",
      collection: "users",
      document: {
        name: username,
        email: email,
        password: encryptedPassword
      }
    };
    
    const response = await axios.post(
      "https://eu-central-1.aws.data.mongodb-api.com/app/data-gnxiz/endpoint/data/v1/action/insertOne",
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

    return response.data.insertedId;
    
  } catch (error) {
    console.error(error);
  }
}

