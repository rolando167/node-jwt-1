import UserService from "../Services/UserService.js"

const getUserById = (req, res) => {
    const data = UserService.findUser(req.params.id);
    res.status(200).json({
        state: true,
        data,
        message: '✔️ Modulo Usuarios!!'
    })
}

const getAllUsers = (req, res) => {
    res.status(200).json({
        state: true,
        message: '✔️ todos'
    })
}

export default {
    getUserById,
    getAllUsers
}