import {addToArray} from '../../src/js/utils/arrayUtils.js';

describe('addToArray()()', () => {
  test('Should add an array to an array', () => {
    const ary = [];
    const newAry = addToArray(ary)(['element1', 'element2']);

    expect(newAry).toStrictEqual(['element1', 'element2']);
  });

  test('Should add multiple elements to an array', () => {
    const ary = [];
    const newAry = addToArray(ary)('element1', 'element2');

    expect(newAry).toStrictEqual(['element1', 'element2']);
  });
});
