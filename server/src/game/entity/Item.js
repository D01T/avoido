const Entity = require('./Entity');

class Item extends Entity {
  constructor(vector, itemInfo) {
    super(vector);
    this.setName('Item');
    this.age = 0;
    this.itemInfo = itemInfo;
  }
}

module.exports = Item;
