
const loginToken = async(req, res) => {
    try {
        console.log(req.body);
	    console.log(req.params);
        res.status(200).json({
            state: true,
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
        console.log(error);
    }
}


export {
    loginToken,
    profile
};