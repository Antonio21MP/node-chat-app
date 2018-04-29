var socket = io();

socket.on('connect', () => {
    console.log('Connected to server.')
});

socket.on('disconnect', () => {
    console.log('Disconnected from server.')
});

socket.on('newMessage', (msg) => {
    console.log('New message', msg);
    var li = jQuery('<li><li/>');
    li.text(`${msg.from}: ${msg.text}`);
    jQuery('#messages').append(li); 
});
jQuery('#message-form').on('submit', function(e){
    e.preventDefault();
    socket.emit('createMessage', {
        from: 'Jose',
        text: jQuery('[name=message]').val()
    }, function() {
    
    });
});