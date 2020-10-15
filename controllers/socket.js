const Usuario = require('../models/usuario')
const Mensaje = require('../models/mensaje')


const usuarioConn = async (id = '') => {
    const u = Usuario.findByIdAndUpdate(id, { online: true }, { new: true });
    return u;
}

const usuarioDesc = async (id = '') => {
    const u = Usuario.findByIdAndUpdate(id, { online: false }, { new: true });
    return u;
}

const saveMsg = async (dt) => {
    try {
        await Mensaje.create(dt);
        return true;
    } catch (error) {
        return false;
    }
}

module.exports = { usuarioConn, usuarioDesc, saveMsg }
