import ItemInfo from '../data/ItemInfo';

export default class Inventory {
  constructor(items = {}) {
    this.items = items;
  }

  addItem(itemInfo) {
    if (itemInfo instanceof ItemInfo) {
      const count = this.items[itemInfo];
      if (typeof count === 'number') {
        this.items[itemInfo] += 1;
      } else {
        this.items[itemInfo] = 0;
      }
    }
  }

  hasItem(itemInfo) {
    if (itemInfo instanceof ItemInfo) {
      const count = this.items[itemInfo];
      return typeof count === 'number' && count >= 1;
    }
    return false;
  }

  removeItem(itemInfo) {
    if (itemInfo instanceof ItemInfo) {
      const count = this.items[itemInfo];
      if (typeof count === 'number' && count >= 1) {
        this.items[itemInfo] -= 1;
      }
    }
  }
}
