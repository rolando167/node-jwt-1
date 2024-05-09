import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config()

const secret  = process.env.TOKEN_SECRET;

const loginToken = async(req, res) => {
    try {
        console.log(req.body);
	    console.log(req.params);

        //Al existir usuario en Base de datos ...
        const { id : sub, name } = { id : "12340", name :"Luccario"}

        const token = jwt.sign({
            sub,
            name,
            exp: Date.now() + 120 * 1000
        }, secret);

        res.status(200).json({
            state: true,
            token,
            message: '✔️ Usuario Logeado'
        })
    } catch (error) {
        console.log(error);
        // throw new Error('NOOO 😞');
    }
}

const profile = async(req, res) => {
    try {
        // Bearer "codeToken"

        const token = req.headers.authorization.split(" ")[1];
        const payload = jwt.verify(token, secret);

        if(Date.now() > payload.exp){
            return 
        }
        res.status(200).json({
            state: true,
            message: '✔️ User Profile!!'
        })
    } catch (error) {
        res.status(401).json({error: error.message});
    }
}


export {
    loginToken,
    profile
};