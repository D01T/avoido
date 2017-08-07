import EntityController from './EntityController';
import { frame } from '../../config.json';

export default class ItemController extends EntityController {
  update() {
    Object.entries(this.elements).forEach((element) => {
      const [, item] = element;
      item.age += 1;
      if (item.age > frame * 10) {
        this.remove(item);
      }
    });
  }
}
