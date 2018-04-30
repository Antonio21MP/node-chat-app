var socket = io();

socket.on('connect', () => {
    console.log('Connected to server.')
});

socket.on('disconnect', () => {
    console.log('Disconnected from server.')
});

socket.on('newMessage', function(msg) {
    var formattedTime = moment(msg.createAt).format('h:mm a');
    var template = jQuery('#message-template').html();
    var html = Mustache.render(template, {
        text: msg.text,
        from: msg.from,
        createAt: formattedTime
    });
    jQuery('#messages').append(html);
});

socket.on('newLocationMessage', function(msg) {

    var formattedTime = moment(msg.createAt).format('h:mm a');
    var template = jQuery('#location-message-template').html();
    var html = Mustache.render(template, {
        from: msg.from,
        createAt: formattedTime,
        url: msg.url
    });
    jQuery('#messages').append(html);
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