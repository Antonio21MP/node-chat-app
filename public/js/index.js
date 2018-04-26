var socket = io();

socket.on('connect', () => {
    console.log('Connected to server.')
    socket.emit('createMessage', {
        from: 'antonio@zaifer.com',
        text: 'Hey, Im Antonio.'
    });
});

socket.on('disconnect', () => {
    console.log('Disconnected from server.')
});

socket.on('newMessage', (msg) => {
    console.log('New message', msg);
});