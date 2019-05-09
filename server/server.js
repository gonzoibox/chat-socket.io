const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const server = require('http').Server(app);
const io = require('socket.io')(server, {serverClient: true});


nunjucks.configure('./client/views', {
    autoescape: true,
    express: app
});

app.use('/assets', express.static('./client/public'));

app.get('/', (req, res) => {
    res.render('index.html', { date: new Date() });
});

io.on('connection', function (socket) {
    socket.emit('connected','You are connected!!');
    // socket.on('my other event', function (data) {
    //   console.log(data);
    // });
  });

server.listen(3000, '0.0.0.0', () => {
    console.log('Server started on 3000');
});

