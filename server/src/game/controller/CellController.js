import EntityController from './EntityController';

export default class CellController extends EntityController {
  update() {
    Object.entries(this.elements).forEach((element) => {
      // const [name, cell] = element;
      // 각 세포를 주인공 세포 방향으로 이동
    });
  }
}
