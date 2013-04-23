var app = require('express')()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server);

server.listen(8080);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/client.html');
});

io.sockets.on('connection', function (socket) {
  socket.emit('info', { hello: 'world' });

  socket.on('canvas data', function (data) {
    console.log('canvas data', data);
  });

});