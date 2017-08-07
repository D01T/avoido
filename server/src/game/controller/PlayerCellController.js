import EntityController from './EntityController';
import Vector from '../utils/Vector';

export default class PlayerCellController extends EntityController {
  update(data) {
    Object.entries(data).forEach((element) => {
      const [name, vectorArray] = element;
      this.elements[name].moveAt(Vector.arrayTo(vectorArray));
    });
  }
}
