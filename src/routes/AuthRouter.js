import express from "express";
const routes = express.Router();

routes.get('/', function(req, res, next) {
    try {
        res.status(200).json({
            state: true,
            message: 'funciona!'
        })

    } catch (error) {
        res.status(400).json({message:"error"})
    }
});

export default routes;