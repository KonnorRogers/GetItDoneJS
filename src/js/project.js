import {pipe} from './utils/pipe.js';
import {withTasks} from './mixins/withTasks.js';
import ItemMixin from './mixins/itemMixin.js';

/**
 * @mixes ItemMixin
 * @see {@link ItemMixin}
 * @mixes withTasks
 *
 * @typedef Project
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
