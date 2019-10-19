import Item from './item.js';
import hasTasks from './mixins/hasTasks.js';

/**
 * A Project factory function, will import default properties from Item
 * @see {@link Item}
 * @see Item
 * @param {Object} props - Properties of the Project
 * @param {Task[]} [props.tasks = []] props.tasks - List of tasks for a given project
 * @return {Object} Returns an object with the given properties
 */

export default function Project(props = {}) {
  const _isProject = true;

  return Object.assign(
    {},
    Item(),
    hasTasks({tasks: props.tasks}),
    {
      isProject: () => _isProject,
    },
    props,
  );
}
