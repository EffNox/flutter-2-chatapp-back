const { Router } = require('express');
const { valJwt } = require('../middlewares/validate-jwt');
const { getUsuarios } = require('../controllers/usuario');

const RT = Router()

RT.get('/', valJwt, getUsuarios)


module.exports = RT;
