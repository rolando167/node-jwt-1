const findUser = (id) =>{
    console.log(id);
    // Busca en BD... y regresa al Modelo
    const user = {
        id : 400,
        nombre : 'Trueno',
        apellido: 'Hero'
    }
    // a DTO
    const userDTO = {
        nombre : user.nombre,
        apellido: user.apellido,
        fecha : Date.now(),
        estado: 'Empleado',
        permisos: ['isAdmin']
    }
    return  userDTO
}

export default {
    findUser
}