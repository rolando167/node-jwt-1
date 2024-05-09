import express from "express";
const router = express.Router();

import authRoute from "./AuthRoute.js";


router.get('/', function(req, res, next) {
    res.status(200).send('🚀 Bienvenidos a la pagina principal API!! ✋');
});


router.use('/auth', authRoute);
// router.use('/users', require('./conversor'));


export default router;