import http from 'http';
import socketio from 'socket.io';
import fs from 'fs';
import ItemInfo from './data/ItemInfo';
import Stage from './stage/Stage';
import Inventory from './system/Inventory';
import CellController from './controller/CellController';
import ItemController from './controller/ItemController';
import PlayerCellController from './controller/PlayerCellController';
import { frame } from '../config.json';

export default class Game {
  constructor() {
    this.stage = new Stage();
    this.stage.setCellController(new CellController());
    this.stage.setItemController(new ItemController());
    this.stage.setPlayerCellController(new PlayerCellController());
    this.stage.setUpadater((entityName, key, values) => {
      if (this.isConnected) {
        switch (key) {
          case 'vector':
            this.connection.send('vector', {
              entityName,
              vector: [values[0].x, values[0].y],
            });
            break;
        }
      }
    });
    this.inventory = new Inventory();
    this.isConnected = false;
  }

  run() {
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
    this.socket.emit('run', {
      width: this.stage.getWidth(),
      height: this.stage.getHeight(),
    });
    this.socket.on('use-item', (data) => {
      /* data를 ItemInfo로 바꿔야됨
      if (this.inventory.hasItem(itemInfo)) {
        아이템 사용
        this.inventory.removeItem(itemInfo);
      } */
    });
    this.socket.on('vector-player', this.stage.playerMove);
    this.isConnected = true;
    this.loop = setInterval(this.stage.ticktock, Math.floor(1000 / frame));
  }

  stop() {
    this.socket.disconnect(true);
    this.isConnected = false;
    clearInterval(this.loop);
  }
}
