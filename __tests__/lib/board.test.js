import Board from '../../src/js/lib/board.js';

describe('Board()', () => {
  test('Should have a board with default values', () => {
    expect(Board.getTasks()).toStrictEqual([]);
  });

  test('Should overwrite default values of tasks and projects', () => {
    const props = {
      tasks: ['task1', 'task2'],
      projects: ['project1', 'project2'],
    };

    Board.addProjects(props.projects);
    Board.addTasks('task1', 'task2');
    expect(Board.getTasks()).toStrictEqual(props.tasks);
    expect(Board.getProjects()).toStrictEqual(props.projects);
  });

  test('Should return that it is a board', () => {
    expect(Board.isBoard()).toBe(true);
  });
});
