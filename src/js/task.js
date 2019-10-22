import {pipe} from './utils/pipe.js';
import ItemMixin from './mixins/itemMixin.js';

/**
 * A task. A task is different from a project because it does not have additional tasks
 * @mixes ItemMixin
 * @see {@link ItemMixin}
 *
 * @typedef Task
 * @param {Object} props - Given properties, assign things accordingly
 * @return {Object} Returns an object with multiple functions and properties
 */
export default function Task(props = {}) {
  const _isTask = true;

  /**
   * @return {boolean} Returns whether or not the object is a Task
   */
  const isTask = () => _isTask;

  return pipe(ItemMixin(props))({isTask});
}
