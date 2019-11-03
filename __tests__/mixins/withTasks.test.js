import {withTasks} from '../../src/js/mixins/withTasks.js';

test('Should add tasks to an object', () => {
  const taskObj = withTasks()({});
  expect(typeof taskObj).toBe('object');
});
