import {withLabel} from '../../../src/js/mixins/itemMixins/withLabels.js';

describe('withLabel()', () => {
  test('Should return a label object', () => {
    const labelObj = withLabel({})({});

    expect(typeof labelObj).toBe('object');
  });

  test('Should modify label array', () => {});
});
