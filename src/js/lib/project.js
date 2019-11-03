import {pipe} from '../utils/pipe.js';
import {withTasks} from '../mixins/withTasks.js';
import ItemMixin from '../mixins/itemMixin.js';

/**
 * A project is a little more in depth than a task.
 * A project can hold many tasks. However, a task cannot hold additional tasks.
 *
 * @param {Object} [props = {}] - The properties for the Task. IE: title, description etc
 * @return {Object} - Returns an {Object} with various functions
 * @example
 * import Project from '<path>/<to>/project.js';
 * const project1 = Project();
 * project1.isProject(); // => true
 */
export default function Project(props = {}) {
  const _isProject = true;

  const isProject = () => _isProject;

  return pipe(
    withTasks(props.tasks),
    ItemMixin(props),
  )({isProject});
}
