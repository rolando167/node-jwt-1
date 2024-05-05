import express from "express";
import bodyparser from "body-parser";
import morgan from "morgan";
import cors from "cors";

import dotenv from 'dotenv';
dotenv.config()

import reviewRoutes from "./routes/index.js";

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
app.use('/api/v1',  reviewRoutes);



export {
    app,
    PORT
};