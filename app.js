/**
 * Created by kokikono on 2017/10/19.
 */
import express from 'express';
import http from 'http';
import SocketIO from 'socket.io';

const app = express();
let server = http.Server(app);
let io = new SocketIO(server);
let port = process.env.PORT || 3000;

app.get('/',(req, res) => {
    res.sendFile(__dirname + '/index.html');
});


io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
    });
});

app.listen(port, () => {
    console.log('Example app listening on port 3000!');
});