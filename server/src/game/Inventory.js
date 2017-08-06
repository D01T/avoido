import Item from './Item';

export default class Inventory {
  constructor(items = []) {
    this.items = items;
  }

  addItem(item) {
    if (item instanceof Item) {
      this.items.push(item);
    }
  }

  hasItem(item) {
    if (item instanceof Item) {
      return this.items.includes(item);
    }
    return false;
  }

  removeItem(item) {
    if (item instanceof Item) {
      const index = this.items.indexOf(item);
      if (index >= 0) {
        this.items.splice(index, 1);
      }
    }
  }
}
