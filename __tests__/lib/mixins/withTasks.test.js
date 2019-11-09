import {withTasks} from '../../../src/js/lib/mixins/withTasks.js';

test('Should add tasks to an object', () => {
  const taskObj = withTasks()({});
  expect(typeof taskObj).toBe('object');
});
