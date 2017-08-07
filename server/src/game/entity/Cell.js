import Entity from './Entity';

export default class Cell extends Entity {
  constructor(vector, color = '#fff') {
    super(vector);
    this.setName('Cell');
    this.color = color;
  }

  getColor() {
    return this.color;
  }

  moveTo(entity, distance) {
    if (entity instanceof Entity && distance > 0) {
      const entityVector = entity.getVector();
      const myVector = this.getVector();
      const vectorDistance = myVector.distance(entityVector);
      if (vectorDistance <= distance) {
        this.setVector(entityVector);
      } else {
        myVector.add(entityVector.subtract(myVector).multiply(vectorDistance / distance));
        this.notifyStage('vector', myVector);
      }
    }
  }

  setColor(color) {
    this.color = color;
  }
}
