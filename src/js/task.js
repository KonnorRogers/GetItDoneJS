import Item from './item.js';

/**
 * A Task factory function, will import default properties from Item
 * @see {@link Item}
 * @see Item
 * @param {Object} props - Properties of the Task
 * @return {Object} Returns an object with the given properties
 */
export default function Task(props = {}) {
  const _isTask = true;

  return Object.assign(
    {},
    Item(),
    {
      isTask: () => _isTask,
    },
    props,
  );
}
