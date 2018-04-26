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

    socket.on('createMessage', (msg) => {
        console.log('createMessage', msg);

        io.emit('newMessage', {
            from: msg.from,
            text: msg.text,
            createAt: new Date().getTime()
        });
    });

    socket.on('disconnect', () => {
        console.log('User was disconnected.')
    });
});

server.listen(port, () => {
    console.log(`Started up at port: ${port}`);
});