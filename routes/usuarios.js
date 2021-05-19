/*

    path: api/usuarios

*/

const { Router } = require('express');
const { getUsuarios } = require('../controllers/usuarios');
const { validarJWT } = require('../middleswares/valida-jwt');

const router = Router();



// validarJWT
router.get('/', validarJWT, getUsuarios);


module.exports = router;