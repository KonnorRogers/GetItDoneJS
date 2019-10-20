import Project from '../src/js/project.js';

describe('Project()', () => {
  test('Should create a Project with isProject set to true', () => {
    const project = Project();
    expect(project.isProject()).toBe(true);
  });
});
