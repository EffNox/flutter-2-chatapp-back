const { Router } = require('express');
const { valJwt } = require('../middlewares/validate-jwt');
const { getByTo } = require('../controllers/mensaje');

const RT = Router()

RT.get('/:to', valJwt, getByTo)


module.exports = RT;
