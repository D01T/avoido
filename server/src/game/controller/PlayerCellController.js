const EntityController = require('./EntityController');
const Vector = require('../utils/Vector');

class PlayerCellController extends EntityController {
  update(data) {
    Object.entries(data).forEach((element) => {
      const [name, vectorArray] = element;
      const playerCell = this.elements[name];
      const playerCellVector = Vector.arrayTo(vectorArray);
      const otherCells = playerCell.getStage().getCellController().getAll();
      playerCell.moveAt(playerCellVector);
      otherCells.forEach((cell) => {
        if (playerCellVector.eqauls(cell.getVector())) {
          this.remove(name);
          console.log('You Die!');
          break;
        }
      });
    });
  }
}

module.exports = PlayerCellController;
