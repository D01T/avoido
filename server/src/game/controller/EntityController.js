export default class EntityController {
  constructor(stage) {
    this.elements = {};
    this.stage = stage;
  }

  add(element) {
    if (!this.has(element)) {
      this.elements[element.getName()] = element;
    }
  }

  has(element) {
    return element.getName() in this.elements;
  }

  remove(element) {
    if (this.has(element)) {
      delete this.elements[element.getName()];
    }
  }

  update() {
    throw new Error('must be implemented by subclass!');
  }
}
