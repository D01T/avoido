import Entity from './Entity';

export default class Item extends Entity {
  constructor(vector, itemInfo) {
    super(vector);
    this.setName('Item');
    this.age = 0;
    this.itemInfo = itemInfo;
  }
}
