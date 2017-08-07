import Connection from './Connection';
import Stage from './Stage';
import CellController from '../controller/CellController';
import ItemController from '../controller/ItemController';
import PlayerCellController from '../controller/PlayerCellController';
import { frame } from '../../config.json';

export default class StageRunner {
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
    this.isConnected = false;
  }

  run() {
    this.connection = new Connection();
    this.connection.send('run', {
      width: this.stage.getWidth(),
      height: this.stage.getHeight(),
    });
    this.connection.connect();
    this.connection.receive('vector-player', this.stage.playerMove);
    this.isConnected = true;
    this.loop = setInterval(this.stage.ticktock, Math.floor(1000 / frame));
  }

  stop() {
    this.disconnect();
    this.isConnected = false;
    clearInterval(this.loop);
  }
}
