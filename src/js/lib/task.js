import {pipe} from '../utils/pipe.js';
import ItemMixin from './mixins/itemMixin.js';

/**
 * A task is the building block for the todo list. This is the smallest value
 * for an item. It cannot hold additional tasks or projects.
 *
 * @param {Object} [props = {}] - The properties for the Task. IE: title, description etc
 * @return {Object} - Returns an {Object} with various functions
 * @example
 * import Task from '<path>/<to>/task.js';
 * const task1 = Task({description: 'new desc'});
 * task1.isTask(); // => true
 * task1.getDescription(); // => 'new desc'
 */
export default function Task(props = {}) {
  const _isTask = true;

  const isTask = () => _isTask;

  return pipe(ItemMixin(props))({isTask});
}
