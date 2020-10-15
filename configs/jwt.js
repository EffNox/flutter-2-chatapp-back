const jwt = require('jsonwebtoken')

const genJwt = (id) => {
    return new Promise((rs, rj) => {
        const pl = { id }
        jwt.sign(pl, process.env.TK_KEY, { expiresIn: '24h' }, (er, tk) => (er) ? rj('No Tk') : rs(tk))
    })
}

const valPureJwt = (tk = '') => {
    try {
        const { id } = jwt.verify(tk, process.env.TK_KEY);
        return [true, id];
    } catch (er) {
        return [false, null];
    }
}

module.exports = { genJwt, valPureJwt }
