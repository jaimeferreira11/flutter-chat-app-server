/*

    path: api/mensajes

*/

const { Router } = require('express');
const { obtenerChat } = require('../controllers/mensajes');
const { validarJWT } = require('../middleswares/valida-jwt');

const router = Router();



// validarJWT
router.get('/:de', validarJWT, obtenerChat);


module.exports = router;