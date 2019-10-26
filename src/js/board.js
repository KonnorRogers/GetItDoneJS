import {pipe} from './utils/pipe.js';
import {withProjects} from './mixins/withProjects';
import {withTasks} from './mixins/withTasks';

export default (function Board(props = {}) {
  const _isBoard = true;

  const isBoard = obj => _isBoard;

  return pipe(
    withProjects(props.projects),
    withTasks(props.tasks),
  )({isBoard});
})();
