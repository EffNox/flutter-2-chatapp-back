const { response } = require("express");
const Usuario = require('../models/usuario')

const getUsuarios = async ({ id, query: { from } }, rs = response) => {
    const dt = await Usuario.find({ _id: { $ne: id } }).sort('-online').skip(+from || 0).limit(20);
    rs.json({ dt })
}

module.exports = { getUsuarios }
