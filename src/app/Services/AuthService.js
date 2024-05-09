import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config()

const TOKEN_SECRET  = process.env.TOKEN_SECRET;

const auth = () => {
     //Al existir usuario en Base de datos ...
     const { id : sub, name } = { id : "12340", name :"Luccario"}

     const token = crearFirma(sub, name);
    return {token};
}

const crearFirma = (sub, name) =>{
    return jwt.sign({
        sub,
        name,
        exp: Date.now() + (2 * 60) * 1000
    }, TOKEN_SECRET);
}

const AuthService = {
    auth
}

export default AuthService