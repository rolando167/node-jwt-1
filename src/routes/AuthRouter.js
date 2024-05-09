import express from "express";
const routes = express.Router();

routes.get('/', function(req, res, next) {
    res.status(200).json({
        state: true,
        message: '✔️ Modulo Auth!!'
    })
});

export default routes;