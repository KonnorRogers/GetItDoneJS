import {pipe} from './utils/pipe.js';
import {withProjects} from './mixins/withProjects';
import {withTasks} from './mixins/withTasks';

export default (() => {
  const _isBoard = true;
  const isBoard = () => _isBoard;

  return Object.assign(
    pipe(
      withProjects(),
      withTasks(),
    )({}),
    {isBoard},
  );
})();
