import {pipe} from './utils/pipe.js';
import {withProjects} from './mixins/withProjects';
import {withTasks} from './mixins/withTasks';

export default (function Board() {
  const _isBoard = true;
  const isBoard = () => _isBoard;

  return pipe(
    withProjects(),
    withTasks(),
  )({isBoard});
})();
