import Item from '../src/js/item.js';
import Project from '../src/js/project.js';

describe('Project()', () => {
  test('Should create a new Project object', () => {
    const project = Project();

    expect(project.isProject()).toBe(true);
  });

  test('Should create a project with item defaults', () => {
    const item = Item();
    const project = Project();

    // Must be in the order.
    // toMatchObject is a subset of the given object
    // IE: project contains all the same as item, but item
    // does not contain all the same properties as project
    expect(project).toMatchObject(item);
  });

  test('Should override default values', () => {
    const props = {
      title: 'new title',
      description: 'new description',
    };
    const project = Project(props);
    const defaultProject = Project();

    expect(project).not.toStrictEqual(defaultProject);
    expect(project.title).toBe(props.title);
    expect(project.description).toBe(props.description);
  });
});
