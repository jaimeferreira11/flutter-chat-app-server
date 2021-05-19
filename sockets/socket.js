const { comprobarJWT } = require('../helpers/jwt');
const { io } = require('../index');
const { usuarioConectado, usuarioDesconectado, grabarMensaje } = require('../controllers/socket');


// Mensajes de Sockets
io.on('connection', (client) => {
    console.log('Cliente conectado');

    // verificar el token
    const [valido, uid] = comprobarJWT(client.handshake.headers['x-token']);
    if (!valido) { return client.disconnect(); }

    // cliente autenticado
    usuarioConectado(uid);

    // Ingresar al usuario en una sala
    // 1. Sala global (Por defecto)

    // 2. Sala individual
    client.join(uid);

    // Escuchar el evento del cliente
    client.on('mensaje-personal', async (payload) => {

        // grabar mensaje en la BD
        await grabarMensaje(payload);
        io.to(payload.para).emit('mensaje-personal', payload);

    });




    client.on('disconnect', () => {

        usuarioDesconectado(uid);
    });




});
