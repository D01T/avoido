const Cell = require('./Cell');
const Vector = require('../utils/Vector');

class PlayerCell extends Cell {
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

module.exports = PlayerCell;
