const express = require('express');
const cors = require('cors');
const path = require('path');

require('./configs/db').dbCon();
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'public')))
app.use('/api/auth', require('./routes/auth'))

const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket')



server.listen(process.env.PORT, () => console.log('Server on', process.env.PORT))
