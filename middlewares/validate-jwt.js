const jwt = require('jsonwebtoken')

const valJwt = (rq, rs, nx) => {
    const tk = rq.header('x-tk')
    if (!tk) return rs.status(401).json({ msg: 'No hay Tk' })
    try {
        const { id } = jwt.verify(tk, process.env.TK_KEY);
        rq.id = id;
        nx();
    } catch (er) {
        return rs.status(401).json({ msg: 'Tk no válido' })
    }
}

module.exports = { valJwt }
