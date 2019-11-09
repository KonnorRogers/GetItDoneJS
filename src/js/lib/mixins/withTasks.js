import {addToArray} from '../../utils/arrayUtils.js';

/**
 * Mixin for using tasks. Ideally, this should be used with {@link pipe}
 * but could technically be used standalone as a one off.
 *
 * @param {string|string[]} [tasks=[]] - The tasks of the object
 * @return {Function({Object})} - Returns a function which takes in an object
 * as a parameter. This will append the functions from withTasks to the
 * given object. This will then return an {Object}.
 *
 * @example
 * import {withTasks} from '<path>/<to>/withTasks.js';
 *
 * // with pipe()
 * const obj = pipe(withTasks)({});
 * obj.getTasks(); // => []
 *
 * // As a standalone
 * const newObj = withTasks()({});
 * newObj.setTasks('task1', 'task2');
 * newObj.getTasks(); // => ['task1', 'task2']
 */
export const withTasks = (tasks = []) => obj => {
  let _tasks = tasks;

  const addTasks = (...newTasks) => {
    _tasks = addToArray(_tasks)(newTasks.flat());
    return _tasks;
  };

  const getTasks = () => _tasks;

  return {
    ...obj,
    getTasks,
    addTasks,
  };
};
