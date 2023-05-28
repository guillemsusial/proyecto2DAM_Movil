import axios from "axios";

//API Key
const secret = "j4hxTuaF2IokPNQYhBoo7OBeVEk8WTEI7JeMrByQQ6LLnAPglV7AOLe3CSNZ52yq";

export default async function fetchHomeData(){
    try {
        // Declaramos la query y especificamos los datos que queremos obtener
        const data = {
            dataSource: "Proyecto2DAM",
            database: "CarWikiAR",
            collection: "cars",
            projection: {
            id: 1,
            nombre: 1,
            url: 1,
            "datos_identificativos.fabricante": 1,
            "datos_identificativos.años_de_fabricacion.año_de_inicio": 1,
            "datos_identificativos.años_de_fabricacion.año_de_finalizacion": 1,
            },
        };

        //Hacemos la llamada a la API mandando la query
        const response = await axios.post(
            "https://eu-central-1.aws.data.mongodb-api.com/app/data-gnxiz/endpoint/data/v1/action/find",
            data,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Request-Headers": "*",
                    "api-key":
                    secret,
                    Accept: "application/json",
                },
            }
        );

        // La respuesta la introducimos en la variable data
        var rawData = response.data;

        // Formateamos la respuesta con el formato deseado
        let formattedData = {
            names: rawData.documents.map(
                ({ _id, nombre, url, datos_identificativos }) => ({
                    id: _id,
                    name: nombre,
                    url: url,
                    brand: datos_identificativos.fabricante,
                    ano_inicio:
                        datos_identificativos.años_de_fabricacion.año_de_inicio,
                    ano_finalizacion:
                        datos_identificativos.años_de_fabricacion.año_de_finalizacion,
                })
            ),
        };

        // Retornamos los datos en el formato deseado
        return formattedData;

    } catch (error) {
        console.error(error);
    }
}