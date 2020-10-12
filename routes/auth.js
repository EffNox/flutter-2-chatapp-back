const { Router } = require('express');
const { check } = require('express-validator');
const { newUser, login, renewTk } = require('../controllers/auth');
const { valInputs } = require('../middlewares/validate-inputs');
const { valJwt } = require('../middlewares/validate-jwt');

const RT = Router()

RT.post('/new', [
    check('nom', 'El nombre es obligatorio').notEmpty(),
    check('cor', 'El correo no es válido').notEmpty().isEmail(),
    check('pwd', 'La contraseña es obligatoria').notEmpty(),
    check('pwd', 'La contraseña debe contener mínimo 6 caracteres').isLength({ min: 6 }),
    valInputs
], newUser)

RT.post('/login', [
    check('cor', 'El correo no es válido').notEmpty().isEmail(),
    check('pwd', 'La contraseña es obligatoria').notEmpty(),
    check('pwd', 'La contraseña debe contener mínimo 6 caracteres').isLength({ min: 6 }),
    valInputs
], login)

RT.get('/renew', valJwt, renewTk)


module.exports = RT;
