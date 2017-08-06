import Stage from './Stage';
import Vector from './Vector';

export default class Entity {
  constructor(vector = new Vector()) {
    this.name = '';
    this.vector = vector;
  }

  getStage() {
    return this.stage;
  }

  getVector() {
    return this.vector;
  }

  notifyStage(key, ...values) {
    if (this.stage instanceof Stage) {
      this.stage.render(this.tag, key, values);
    }
  }

  setStage(stage) {
    this.stage = stage;
  }

  setVector(vector) {
    this.vector = vector;
    this.notifyStage('vector', vector);
  }

  updateVector() {
    this.notifyStage('vector', this.vector);
  }
}
