const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const path = require('path');

const port = 4002;
server.listen(port);
// WARNING: app.listen(80) will NOT work here!

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

io.on('connection', socket => {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', data => {
    console.log(data);
  });
});
