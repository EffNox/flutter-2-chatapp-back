const { validationResult } = require("express-validator");

const valInputs = (rq, rs, nx) => {
    const errs = validationResult(rq)
    if (!errs.isEmpty()) return rs.status(400).json({ errors: errs.mapped() });
    nx();
}

module.exports = { valInputs }
