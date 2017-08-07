import Stage from '../stage/Stage';
import Utils from '../utils/Utils';
import Vector from '../utils/Vector';

export default class Entity {
  constructor(vector = new Vector()) {
    this.name = `Entity:${Utils.getHash(new Date().toString())}`;
    this.vector = vector;
  }

  getName() {
    return this.name;
  }

  getStage() {
    return this.stage;
  }

  getVector() {
    return this.vector;
  }

  notifyStage(key, ...values) {
    if (this.stage instanceof Stage) {
      this.stage.update(this.tag, key, values);
    }
  }

  setName(name) {
    this.name = this.name.replace(/^[A-z0-9]+/, name);
  }

  setStage(stage) {
    this.stage = stage;
  }

  setVector(vector) {
    this.vector = vector;
    this.notifyStage('vector', vector);
  }
}
