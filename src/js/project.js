import {pipe} from './utils/pipe.js';
import {withTasks} from './mixins/withTasks.js';
import ItemMixin from './mixins/itemMixin.js';

export default (props = {}) => {
  const _isProject = true;
  const isProject = () => _isProject;
  return Object.assign(
    pipe(
      ItemMixin(props),
      withTasks({tasks: props.tasks}),
    )({}),
    {isProject},
  );
};
