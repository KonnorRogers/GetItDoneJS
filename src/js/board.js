import {pipe} from './utils/pipe.js';
import {withProjects} from './mixins/withProjects';
import {withTasks} from './mixins/withTasks';

/**
 * The board is where all projects and tasks will sit. Each user has only 1 board.
 * Board holds projects & tasks.
 *
 * @module Board
 * @mixes withProjects
 * @mixes withTasks
 *
 * @typedef Board
 *
 * @return {Object} Returns a Board object
 */
export default (function Board(props = {}) {
  const _isBoard = true;

  /**
   * Checks if the object is a Board object
   * @return {boolean}
   */
  const isBoard = () => _isBoard;

  return pipe(
    withProjects({projects: props.projects}),
    withTasks({tasks: props.tasks}),
  )({isBoard});
})();
