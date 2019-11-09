import {withTitle} from '../../../../src/js/lib/mixins/itemMixins/withTitle.js';

describe('withTitle()', () => {
  test('Should return an object with title functions', () => {
    const titleObj = withTitle()({});

    expect(typeof titleObj).toBe('object');
    expect(titleObj.getTitle()).toBe('');
  });

  test('Should return a new title when given a string', () => {
    const titleObj = withTitle()({});

    const testTitle = 'Test title';
    titleObj.setTitle(testTitle);

    expect(titleObj.getTitle()).toBe(testTitle);
  });
});
