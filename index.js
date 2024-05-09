import {app} from "./src/app.js";

// capturar Puerto
const PORT  = process.env.APP_PORT || 4000;

//funcion Servidor
async function servidor () {
    await app.listen(PORT);
    console.log(`🚀 Servidor ejecutando en el puerto ${PORT} 👍`);
}

//Iniciar Servidor
servidor();