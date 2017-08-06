export default class EntityController {
  constructor(stage) {
    this.entities = [];
    this.stage = stage;
  }

  addEntity(entity) {
    if (!this.entities.includes(entity)) {
      this.entities.push(entity);
    }
  }

  update() {
    this.stage.render();
  }
}
