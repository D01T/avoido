const EntityController = require('./EntityController');
const Vector = require('../utils/Vector');

class PlayerCellController extends EntityController {
  update(data) {
    Object.entries(data).forEach((element) => {
      const [name, vectorArray] = element;
      this.elements[name].moveAt(Vector.arrayTo(vectorArray));
    });
  }
}

module.exports = PlayerCellController;
