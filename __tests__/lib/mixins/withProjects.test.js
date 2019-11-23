import {withProjects} from '../../../src/js/lib/mixins/withProjects.js';

test('Should add projects to an object', () => {
  const projectObj = withProjects()({});
  expect(typeof projectObj).toBe('object');
});
