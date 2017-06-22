var name = getQueryVariable('name') || 'Anonymous';
var room = getQueryVariable('room');
var socket = io();

$('.room-title').text(room);

socket.on('connect', function() {
	console.log('connected to socket.io server!');
	socket.emit('joinRoom', {
		name: name,
		room: room
	});
});

socket.on('message', function(message) {//message event
	var momentTimeStamp = moment.utc(message.timestamp);
	var $messages = $('.messages');
	var $message = $('<li class="list-group-item"></li>');

	$message.append('<p><strong>' + message.name + ' ' + momentTimeStamp.local().format('h:mm a') + '</strong></p>');
	$message.append('<p>' + message.text + '</p>');
	$messages.append($message);
});

var $form = $('#message-form');

$form.on('submit', function(event) {
	event.preventDefault();
	var $message = $form.find('input[name=message]');
	socket.emit('message', {
		name: name,
		text: $message.val()
	});
	$message.val('');
});