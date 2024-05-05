import express from "express";
const router = express.Router();

router.get('/', function(req, res, next) {
    res.send('Bienvenidos a la pagina principal API!! ✋');
});


// router.use('/auth', require('./auth'));
// router.use('/users', require('./conversor'));


export default router;