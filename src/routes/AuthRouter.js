import express from "express";
const routes = express.Router();

/*=============================================================================
|   Modulo:  Auth
|   Fecha: 09-05-2024
|   Ruta Test:  http://localhost:3000/api/v1/auth/
 *===========================================================================*/

routes.get('/', function(req, res, next) {
    res.status(200).json({
        state: true,
        message: '✔️ Modulo Auth!!'
    })
});

routes.post('/login' , function(req, res){
    console.log(req.body);
	console.log(req.params);
    res.status(200).json({
        state: true,
        message: '✔️ Usuario Logeado'
    })
});

export default routes;