const EntityController = require('./EntityController');
const { frame } = require('../../config.json');

class ItemController extends EntityController {
  update() {
    Object.entries(this.elements).forEach((element) => {
      const [, item] = element;
      item.age += 1;
      if (item.age > frame * 10) {
        this.remove(item);
      }
    });
  }
}

module.exports = ItemController;
