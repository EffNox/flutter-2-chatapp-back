const { io } = require('../index');

io.on('connection', client => {
    console.log('Cliente conectado');

    client.on('disconnect', () => {
        console.log('Desconectado');
    });

    client.on('new-msj', dt => {
        // io.emit('new-msj', dt)//emite a todos
        client.broadcast.emit('new-msj', dt)//emite a todos menos al que lo emitio
    })

});
