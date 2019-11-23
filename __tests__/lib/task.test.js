import Task from '../../src/js/lib/task.js';

describe('Task()', () => {
  test('Should create a task with isTask set to true', () => {
    const task = Task();
    expect(task.isTask()).toBe(true);
  });
});
