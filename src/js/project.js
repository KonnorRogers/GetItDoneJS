import {pipe} from './utils/pipe.js';
import {withTasks} from './mixins/withTasks.js';
import ItemMixin from './mixins/itemMixin.js';

/**
 * @mixes ItemMixin
 *
 * @param {Object} props - Given properties, assign things accordingly
 * @return {Object} Returns an object with multiple functions and properties
 */
export default function Project(props = {}) {
  const _isProject = true;

  const isProject = () => _isProject;

  return pipe(
    withTasks(props.tasks),
    ItemMixin(props),
  )({isProject});
}
