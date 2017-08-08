import Item from '../data/ItemInfo';

export default class ItemInfo {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }
}
