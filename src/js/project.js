import {pipe} from './utils/pipe.js';
import {withTasks} from './mixins/withTasks.js';
import ItemMixin from './mixins/itemMixin.js';

export default function Project(props = {}) {
  const _isProject = true;

  const isProject = () => _isProject;

  return pipe(
    withTasks(props.tasks),
    ItemMixin(props),
  )({isProject});
}
