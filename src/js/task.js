import {pipe} from './utils/pipe.js';
import ItemMixin from './mixins/itemMixin.js';

export default function Task(props = {}) {
  const _isTask = true;

  const isTask = () => _isTask;

  return pipe(ItemMixin(props))({isTask});
}
