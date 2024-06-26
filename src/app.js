import express from "express";
//import bodyparser from "body-parser"; //** Deprecared
import morgan from "morgan";
import cors from "cors";

import dotenv from 'dotenv';
dotenv.config()

import reviewRoutes from "./routes/indexRoute.js";

const app = express();

// capturar body
app.use(express.json());
app.use(express.text());
// app.use(bodyparser.urlencoded({ extended: false })); //** Deprecared
// app.use(bodyparser.json());

// -- middleware
app.use(cors());
app.use(morgan('dev'));


//Ruta
app.use('/api/v1',  reviewRoutes);



export {
    app
};