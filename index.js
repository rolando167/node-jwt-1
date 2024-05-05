import {app, PORT} from "./src/app.js";

//funcion Servidor
async function servidor () {
    await app.listen(PORT);
    console.log(`Servidor ejecutando en el puerto ${PORT} 👍`);
}

//Iniciar Servidor
servidor();