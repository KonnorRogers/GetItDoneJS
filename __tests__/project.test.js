import Project from '../src/js/project.js';

describe('Project()', () => {
  test('Should create a Project with isProject set to true', () => {
    const project = Project();
    expect(project.isProject()).toBe(true);
  });

  test('Should return an array of tasks', () => {
    const project = Project();
    expect(project.getTasks()).toStrictEqual([]);
  });

  test('Should add a singular task', () => {
    const project = Project();
    project.addTasks('task1');

    expect(project.getTasks()).toStrictEqual(['task1']);
  });

  test('Should add multiple tasks not specified in an array', () => {
    const project = Project();
    project.addTasks('task1', 'task2');
    expect(project.getTasks()).toStrictEqual(['task1', 'task2']);
  });

  test('Should add an array of tasks', () => {
    const project = Project();
    const tasks = ['task1', 'task2'];

    project.addTasks(tasks);

    expect(project.getTasks()).toStrictEqual(tasks);
  });

  test('Should be unable to change the value of project to false', () => {
    const project = Project();
    project._isProject = false;
    expect(project.isProject()).toBe(true);
  });

  test('Should fill in tasks with the given values when passed into props', () => {
    const props = {
      tasks: ['task1', 'task2', 'task3'],
    };
    const project = Project(props);

    expect(project.getTasks()).toStrictEqual(props.tasks);
  });

  test('Should fill in the description when passed into props', () => {
    const props = {
      description: 'Sup my dudes',
    };

    const project = Project(props);

    expect(project.getDescription()).toBe(props.description);
  });
});
