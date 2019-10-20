import Board from '../src/js/board.js';

describe('Board()', () => {
  // test('Should have a board with default values', () => {
  //   expect(Board().getTasks()).toStrictEqual([]);
  // });

  test('Should overwrite default values of tasks and projects', () => {
    const props = {
      tasks: ['task1', 'task2'],
      projects: ['project1', 'project2'],
    };

    props.projects.forEach(project => Board.addProjects(project));
    expect(Board.getProjects()).toStrictEqual(props.projects);
  });
});
