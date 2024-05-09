import express from "express";
const router = express.Router();

import authRouter from "./AuthRouter.js";


router.get('/', function(req, res, next) {
    res.status(200).send('🚀 Bienvenidos a la pagina principal API!! ✋');
});


router.use('/auth', authRouter);
// router.use('/users', require('./conversor'));


export default router;