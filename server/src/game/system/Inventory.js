const ItemInfo = require('../data/ItemInfo');

class Inventory {
  constructor(items = {}) {
    this.items = items;
  }

  addItem(itemInfo) {
    if (itemInfo instanceof ItemInfo) {
      const name = itemInfo.getName();
      const count = this.items[name];
      if (typeof count === 'number') {
        this.items[name] += 1;
      } else {
        this.items[name] = 1;
      }
    }
  }

  hasItem(itemInfo) {
    if (itemInfo instanceof ItemInfo) {
      const count = this.items[itemInfo.getName()];
      return typeof count === 'number' && count >= 1;
    }
    return false;
  }

  removeItem(itemInfo) {
    if (itemInfo instanceof ItemInfo) {
      const name = itemInfo.getName();
      const count = this.items[name];
      if (typeof count === 'number' && count >= 1) {
        this.items[name] -= 1;
      }
    }
  }

  getItemCount(itemInfo) {
    if (itemInfo instanceof ItemInfo) {
      const count = this.items[itemInfo.getName()];
      if (typeof count === 'number') {
        return count;
      }
    }
    return 0;
  }
}

module.exports = Inventory;
