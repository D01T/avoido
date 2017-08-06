import Cell from './Cell';

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
    this.entities.forEach((entity) => {
      if (entity instanceof Cell) {
        // 각 세포를 주인공 세포 방향으로 이동
      }
    });
  }
}
