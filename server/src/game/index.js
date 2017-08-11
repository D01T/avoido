const http = require('http');
const socketio = require('socket.io');
const fs = require('fs');
const path = require('path');
const ItemInfo = require('./data/ItemInfo');
const Stage = require('./stage/Stage');
const Inventory = require('./system/Inventory');
const CellController = require('./controller/CellController');
const ItemController = require('./controller/ItemController');
const PlayerCellController = require('./controller/PlayerCellController');
const Utils = require('./utils/Utils');
const { frame } = require('../config.json');

class Game {
  constructor() {
    this.stage = new Stage();
    this.stage.setCellController(new CellController());
    this.stage.setItemController(new ItemController());
    this.stage.setPlayerCellController(new PlayerCellController());
    this.stage.setUpadater((entityName, key, values) => {
      if (this.isConnected) {
        switch (key) {
          case 'vector':
            // vector: object
            // {
            //   entityName: string,
            //   vector: [x, y]
            // }
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
    this.socket = socketio(app);
    app.listen(5000);
    this.socket.on('connection', (socket) => {
      socket.emit('news', { hello: 'world' });
      socket.on('my other event', (data) => {
        console.log(data);
      });
    });
    // run: object
    // {
    //   width: number,
    //   height: number
    // }
    this.socket.emit('run', {
      width: this.stage.getWidth(),
      height: this.stage.getHeight(),
    });
    // use-item -> data: object
    // {
    //   itemName: string,
    //   playerName: string
    // }
    this.socket.on('use-item', (data) => {
      const itemClassPath = path.join('data', 'ItemInfo-${Utils.toPascalCase(data.itemName)}.js');
      if (fs.existsSync(itemClassPath)) {
        const itemInfo = require(itemClassPath);
        if (this.inventory.hasItem(itemInfo)) {
          itemInfo.use(this.stage, playerName);
          this.inventory.removeItem(itemInfo);
        }
      }
    });
    // vector-player -> data: object
    // {
    //   player1Name: [x, y],
    //   player2Name: [x, y],
    //   ...
    // }
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

module.exports = Game;
