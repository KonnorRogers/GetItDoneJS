import Board from '../src/js/board.js';

describe('Board()', () => {
  test('Should return an array of projects, tasks, and items', () => {
    expect(Board.projects).toStrictEqual([]);
    expect(Board.tasks).toStrictEqual([]);
    expect(Board.items()).toStrictEqual([]);
  });

  test('Should update items if projects and tasks are updated', () => {
    const board = Board;
    board.addProject('project1');
    board.addTask('task1');
    expect(board.items()).toStrictEqual(['project1', 'task1']);
  });
});
