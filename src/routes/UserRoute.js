import express from "express";
const routes = express.Router();

import userController from "../app/Controllers/UserController.js";
/*=============================================================================
|   Modulo:  Users
|   Fecha:   09-05-2024
|   Ruta Test:  http://localhost:3000/api/v1/user/
 *===========================================================================*/

routes.get('/', function(req, res) {
    res.status(200).json({
        state: true,
        message: '✔️ Modulo Usuarios!!'
    })
});

routes.get('/find/:id', userController.getUserById);

export default routes;