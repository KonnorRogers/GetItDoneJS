import {pipe} from '../utils/pipe.js';
import {withProjects} from './mixins/withProjects';
import {withTasks} from './mixins/withTasks';

/**
 * The board is the default spot for everything to go.
 * The board holds both the projects and tasks. A user only has 1 board.
 *
 * @return {Object} - Returns an {Object} with various Board functions
 * @example
 * import Board from '<path>/<to>/board.js';
 * Board().isBoard(); // => true
 */
export default (function Board(props = {}) {
  const _isBoard = true;

  const isBoard = () => _isBoard;

  return pipe(
    withProjects(props.projects),
    withTasks(props.tasks),
  )({isBoard});
})();
