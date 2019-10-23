import {pipe} from './utils/pipe.js';
import {withTasks} from './mixins/withTasks.js';
import ItemMixin from './mixins/itemMixin.js';

/**
 * A project which holds tasks and other items from itemMixin
 *
 * @typedef Project
 * @function Project
 * @mixes ItemMixin
 * @see {@link ItemMixin}
 * @mixes withTasks
 *
 * @param {Object} props - Given properties, assign things accordingly
 * @return {Object} Returns an object with multiple functions and properties
 */
export default function Project(props = {}) {
  const _isProject = true;

  /**
   * @return {boolean} Returns that the object is a project
   */
  const isProject = () => _isProject;

  return pipe(
    withTasks({tasks: props.tasks}),
    ItemMixin(props),
  )({isProject});
}
