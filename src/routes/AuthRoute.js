import express from "express";
const routes = express.Router();
import {loginToken, profile} from '../app/Controllers/AuthController.js';
import {verifyToken} from '../app/Middlewares/AuthMiddleware.js';
/*=============================================================================
|   Modulo:  Auth
|   Fecha: 09-05-2024
|   Ruta Test:  http://localhost:3000/api/v1/auth/
 *===========================================================================*/

routes.get('/', function(req, res) {
    res.status(200).json({
        state: true,
        message: '✔️ Modulo Auth!!'
    })
});

routes.post('/login', loginToken)
        .get('/profile', [verifyToken], profile);

export default routes;