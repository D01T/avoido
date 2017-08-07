import http from 'http';
import socketio from 'socket.io';
import fs from 'fs';

export default class Connection {
  connect() {
    const app = http.createServer((req, res) => {
      fs.readFile(`${__dirname}/index.html`, (err, data) => {
        if (err) {
          res.writeHead(500);
          res.end('Error loading index.html');
        } else {
          res.writeHead(200);
          res.end(data);
        }
      });
    });
    const io = socketio(app);

    app.listen(5000);
    io.on('connection', (socket) => {
      this.socket = socket;
      socket.emit('news', { hello: 'world' });
      socket.on('my other event', (data) => {
        console.log(data);
      });
    });
  }

  disconnect() {
    this.socket.disconnect(true);
  }

  receive(name, func) {
    this.socket.on(name, func);
  }

  send(name, data) {
    this.socket.emit(name, data);
  }
}
