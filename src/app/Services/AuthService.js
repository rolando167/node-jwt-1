import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config()

const secret  = process.env.TOKEN_SECRET;

const auth = () => {
     //Al existir usuario en Base de datos ...
     const { id : sub, name } = { id : "12340", name :"Luccario"}

     const token = jwt.sign({
         sub,
         name,
         exp: Date.now() + (2 * 60) * 1000
     }, secret);
    return {token};
}

const AuthService = {
    auth
}

export default AuthService