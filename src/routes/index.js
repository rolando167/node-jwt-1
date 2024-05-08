import express from "express";
const router = express.Router();

router.get('/', function(req, res, next) {
    res.status(200).send('Bienvenidos a la pagina principal API!! ✋');
    // res.json({
    //     state: true,
    //     message: 'funciona!'
    // })
});


// router.use('/auth', require('./auth'));
// router.use('/users', require('./conversor'));


export default router;