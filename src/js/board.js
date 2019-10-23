import {pipe} from './utils/pipe.js';
import {withProjects} from './mixins/withProjects';
import {withTasks} from './mixins/withTasks';

/**
 * The board is where all projects and tasks will sit. Each user has only 1 board.
 * Board holds projects & tasks.
 *
 * @mixes withProjects
 * @mixes withTasks
 * @return {Object} Returns a Board object
 * @example
 * import Board from '<path>/<to>/board.js';
 * Board.isBoard(); // => true
 */
export default (function Board(props = {}) {
  const _isBoard = true;

  /**
   * Checks if the object is a Board object
   * @return {boolean}
   */
  const isBoard = obj => _isBoard;

  return pipe(
    withProjects(props),
    withTasks(props),
  )({isBoard});
})();
