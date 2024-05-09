import express from "express";
const router = express.Router();

import authRoute from "./AuthRoute.js";
import userRoute from "./UserRoute.js";
/*=============================================================================
|   Modulo:  Rutas Totales
|   Fecha: 08-05-2024
|   Ruta Test:  http://localhost:3000/api/v1/
 *===========================================================================*/

router.get('/', function(req, res, next) {
    res.status(200).send('🚀 Bienvenidos a la pagina principal API!! ✋');
});


router.use('/auth', authRoute);
router.use('/user', userRoute);



export default router;