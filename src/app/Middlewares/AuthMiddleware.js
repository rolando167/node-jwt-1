import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config()
const secret  = process.env.TOKEN_SECRET;

const verifyToken = (req, res, next) => {
    // const token = req.header('auth-token')
    // let token = req.headers["x-access-token"];
    // Bearer "codeToken"
    if(!req.headers.authorization){
        return res.status(403).send({
            message: "No token provided!"
        });
    }
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
        return res.status(403).send({
          message: "No token provided!"
        });
    }

    const payload = jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                message: "Unauthorized!!"
            });
        }
        if(Date.now() > decoded.exp){
            return res.status(401).json({error: "Token expired!!"});
        }
        // req.userId = decoded.id;
        next();
    });

};

export {
    verifyToken,
};