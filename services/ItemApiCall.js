import axios from "axios";

//API Key
const secret = "j4hxTuaF2IokPNQYhBoo7OBeVEk8WTEI7JeMrByQQ6LLnAPglV7AOLe3CSNZ52yq";

export default async function fetchItemData(name){
    try {
        // Declaramos la query y especificamos los datos que queremos obtener
        const queryData = {
            dataSource: "Proyecto2DAM",
            database: "CarWikiAR",
            collection: "cars",
            filter: {
            nombre: name,
            },
        };

        //Hacemos la llamada a la API mandando la query
        const response = await axios.post(
            "https://eu-central-1.aws.data.mongodb-api.com/app/data-gnxiz/endpoint/data/v1/action/findOne",
            queryData,
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
        var rawData = response.data.document;

        // Retornamos los datos en el formato deseado
        return rawData;

    } catch (error) {
        console.error(error);
    }
}