const { response } = require('express');
const bcrypt = require('bcryptjs')

const Usuario = require('../models/usuario');
const { genJwt } = require('../configs/jwt');

const newUser = async ({ body: dt }, rs = response) => {
    const { cor } = dt;
    if (await Usuario.findOne({ cor })) return rs.status(400).json({ msg: 'El correo ya está registrado' })

    try {
        dt.pwd = bcrypt.hashSync(dt.pwd);

        const usu = await new Usuario(dt).save();
        const tk = await genJwt(usu.id);

        rs.json({ dt: usu, tk })
    } catch (er) {
        rs.status(500).json({ msg: 'Error al registrar' })
    }
}

const login = async ({ body: bd }, rs = response) => {
    const { cor, pwd } = bd;

    try {
        const dt = await Usuario.findOne({ cor })
        if (!dt) return rs.status(400).json({ msg: 'El correo no es válido' })

        const valPwd = bcrypt.compareSync(pwd, dt.pwd)
        if (!valPwd) return rs.status(400).json({ msg: 'La contraseña no es valida' })

        const tk = await genJwt(dt.id)
        rs.json({ dt, tk })
    } catch (er) {
        rs.status(500).json({ msg: 'Error al iniciar sesión' })
    }
}

const renewTk = async ({ id }, rs = response) => {
    const dt = await Usuario.findById(id)
    const tk = await genJwt(dt.id)
    rs.json({ dt, tk })
}

module.exports = { newUser, login, renewTk }
