import Task from '../src/js/task.js';

describe('Task()', () => {
  test('Should create a task with isTask set to true', () => {
    const task = Task();
    expect(task.isTask()).toBe(true);
  });
});
