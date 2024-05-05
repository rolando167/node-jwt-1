const express = require('express');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const app = express();

// capturar body
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// -- middleware
app.use(cors());
app.use(morgan('dev'));

// capturar Puerto
const PORT  = process.env.APP_PORT || 4000;

//Ruta
app.use('/api/v1', require('./src/routes'));

//funcion Servidor
async function servidor () {
    await app.listen(PORT);
    console.log(`Servidor ejecutando en el puerto ${PORT} 👍`);
}

//Iniciar Servidor
servidor();