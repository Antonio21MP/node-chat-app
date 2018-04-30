var socket = io();

socket.on('connect', () => {
    console.log('Connected to server.')
});

socket.on('disconnect', () => {
    console.log('Disconnected from server.')
});

socket.on('newMessage', function(msg) {
    console.log('New message', msg);
    var li = jQuery('<li></li>');
    li.text(`${msg.from}: ${msg.text}`);
    jQuery('#messages').append(li); 
});

socket.on('newLocationMessage', function(msg) {
    var li = jQuery('<li></li>');
    var a = jQuery('<a target="_blank"> My current location.</a>');

    li.text(`${msg.from}: `);
    a.attr('href',msg.url);
    li.append(a);
    jQuery('#messages').append(li);
});

jQuery('#message-form').on('submit', function(e){
    e.preventDefault();
    var msgTextBox = jQuery('[name=message]');
    socket.emit('createMessage', {
        from: 'Jose',
        text: msgTextBox.val()
    }, function() {
        msgTextBox.val('');
    });
});

var locationButton = jQuery('#send-location');
locationButton.on('click', function(){
    if(!navigator.geolocation){
        return alert('Geolocation not soported by your browser.');
    }
    locationButton.attr('disabled', 'disabled').text('Sending location...');

    navigator.geolocation.getCurrentPosition(function(position) {
        locationButton.removeAttr('disabled').text('Sending location...');
        socket.emit('createLocationMessage', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        });
    }, function(){
        locationButton.removeAttr('disabled').text('Sending location...');
        alert('Unable to fetch location.');
    });
});