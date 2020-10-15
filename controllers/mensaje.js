const Mensaje = require('../models/mensaje')

const getByTo = async ({ id: from, params: { to } }, rs) => {
    const dt = await Mensaje.find({
        $or: [{ from, to }, { from: to, to: from }]
    }).sort({ createdAt: 'desc' }).limit(30)

    rs.json({ dt })
}

module.exports = {
    getByTo
}
