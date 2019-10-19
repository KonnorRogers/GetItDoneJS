import Item from '../src/js/item.js';
import Task from '../src/js/task.js';

describe('Task()', () => {
  test('Should create a new Task object', () => {
    const task = Task();

    expect(task.isTask()).toBe(true);
  });

  test('Should create a Task with Item defaults', () => {
    const item = Item();
    const task = Task();

    // Must be in the order.
    // toMatchObject is a subset of the given object
    // IE: project contains all the same as item, but item
    // does not contain all the same properties as project
    expect(task).toMatchObject(item);
  });

  test('Should override default values', () => {
    const props = {
      title: 'new title',
      description: 'new description',
    };
    const task = Task(props);
    const defaultTask = Task();

    expect(task).not.toStrictEqual(defaultTask);
    expect(task.title).toBe(props.title);
    expect(task.description).toBe(props.description);
  });
});
