
import authService  from "../Services/AuthService.js";

const loginToken = async(req, res) => {
    try {
        // console.log(req.body);
	    // console.log(req.params);
        const authenticated = authService.auth()

        res.status(200)
        .header('auth-token', authenticated.token)
        .json({
            state: true,
            token: authenticated.token,
            message: '✔️ Usuario Logeado'
        })
    } catch (error) {
        console.log(error);
        // throw new Error('NOOO 😞');
    }
}

const profile = async(req, res) => {
    try {
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