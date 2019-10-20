import {pipe} from './utils/pipe.js';
import ItemMixin from './mixins/itemMixin.js';

// export default function Task(props = {}) {
// export default (props = {}) => pipe(ItemMixin(props))({});

export default function Task(props = {}) {
  const _isTask = true;
  const isTask = () => _isTask;

  return Object.assign(pipe(ItemMixin(props))({}), {isTask});
}
