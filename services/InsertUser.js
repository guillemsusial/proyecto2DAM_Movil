import { MongoClient } from 'mongodb';
import crypto from 'crypto-js';

// Configuración de la conexión a MongoDB
const uri = 'mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>?retryWrites=true&w=majority';
const client = new MongoClient(uri);

// Función para insertar un usuario en la tabla de usuarios
async function insertUser(username, password, email) {
  try {
    // Encriptación de la contraseña con AES
    const encryptedPassword = crypto.AES.encrypt(password, 'secreto').toString();

    // Validación y sanitización de los datos de entrada
    if (!username || !password || !email) {
      throw new Error('Faltan datos de usuario');
    }
    if (username.length < 3 || username.length > 20) {
      throw new Error('El nombre de usuario debe tener entre 3 y 20 caracteres');
    }
    if (password.length < 6 || password.length > 20) {
      throw new Error('La contraseña debe tener entre 6 y 20 caracteres');
    }
    if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      throw new Error('El correo electrónico no es válido');
    }

    // Conexión a la base de datos
    await client.connect();
    const database = client.db('<dbname>');
    const collection = database.collection('users');

    // Inserción del usuario en la tabla de usuarios
    const result = await collection.insertOne({
      username: username,
      password: encryptedPassword,
      email: email
    });
    console.log(`Usuario insertado con el ID: ${result.insertedId}`);

    // Cierre de la conexión a la base de datos
    await client.close();
  } catch (err) {
    console.log(err.message);
  }
}