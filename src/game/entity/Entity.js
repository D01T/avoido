const Stage = require('../stage/Stage');
const Utils = require('../utils/Utils');
const Vector = require('../utils/Vector');

class Entity {
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

  remove() {
    this.notifyStage('remove');
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

module.exports = Entity;
