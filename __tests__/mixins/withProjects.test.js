import {withProjects} from '../../src/js/mixins/withProjects.js';

test('Should add projects to an object', () => {
  const projectObj = withProjects()({});
  expect(typeof projectObj).toBe('object');
});
