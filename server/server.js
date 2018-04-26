const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');

var app = express();
var server = http.createServer(app);
var io = socketIO(server);
var port = process.env.PORT || 3000;

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected.');

    socket.emit('newMessage', {
        from: 'alejandra@zaifer.com',
        text: 'Hi, how is going?',
        createAt: 123
    });

    socket.on('createMessage', (msg) => {
        console.log('createMessage', msg);
    });

    socket.on('disconnect', () => {
        console.log('User was disconnected.')
    });
});

server.listen(port, () => {
    console.log(`Started up at port: ${port}`);
});