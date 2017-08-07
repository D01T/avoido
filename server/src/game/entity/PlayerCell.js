import Cell from './Cell';
import Vector from '../utils/Vector';

export default class PlayerCell extends Cell {
  constructor(vector, color) {
    super(vector, color);
    this.setName('PlayerCell');
  }

  moveAt(vector) {
    if (vector instanceof Vector) {
      this.setVector(vector);
    }
  }
}
