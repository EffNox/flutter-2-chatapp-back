const { valPureJwt } = require('../configs/jwt');
const { usuarioConn, usuarioDesc, saveMsg } = require('../controllers/socket');
const { io } = require('../index');

io.on('connection', client => {


    console.log('Cliente conectado');
    const [ok, id] = valPureJwt(client.handshake.headers['x-tk']);
    if (!ok) return client.disconnect();

    usuarioConn(id)

    client.join(id)

    client.on('disconnect', () => {
        usuarioDesc(id)
    });

    client.on('private-msg', async dt => {
        // io.emit('new-msj', dt)//emite a todos
        // await saveMsg({ from: id, ...dt });
        await saveMsg(dt);
        io.to(dt.to).emit('private-msg', dt)
        // client.broadcast.emit('new-msj', dt)//emite a todos menos al que lo emitio
    })

});
